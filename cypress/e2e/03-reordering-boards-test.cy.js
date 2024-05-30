const BasePage = require("../pages/BasePage.js")
const LoginPage = require ("../pages/login/LoginPage.js")
const ProfilePage = require ("../pages/user-profile/workflow/ProfilePage.js")

var loginDetails = require('../fixtures/login-details/login-details.json')
var boardsData = require('../fixtures/boards/boards-data.json')



describe('Create a test for creating a loan (deal) application ', () => {
    before(() => {
      cy.login(loginDetails.email, loginDetails.password);
    });

    after(() => {
      //cy.logout()
    })
  
    it('visits the boards/deals page creates a new deal and validate', () => {
      cy.addNewBoard(boardsData.boardName[0],boardsData.boardType[0])
      ProfilePage.elements.boardStatusSpan().should("exist", {timeout:10000})
      .should("have.text", "Board created")
      ProfilePage.elements.boardBackButton().click({timeout:5000})

      let initialPosition
        cy.contains(boardsData.boardName[0]).then($el => {
            initialPosition = $el.position()
        })

      cy.reorderBoard(boardsData.boardPositions[0], boardsData.boardPositions[3])

      cy.contains(boardsData.boardName[0]).then($el => {
        const newPosition = $el.position()

      cy.reload()  
        expect(newPosition).to.not.deep.equal(initialPosition)
      })
      
    })
  })
