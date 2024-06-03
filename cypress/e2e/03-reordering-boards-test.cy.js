const BasePage = require("../pages/BasePage.js")
const LoginPage = require ("../pages/login/LoginPage.js")
const ProfilePage = require ("../pages/user-profile/workflow/ProfilePage.js")

var loginDetails = require('../fixtures/login-details/login-details.json')
var boardsData = require('../fixtures/boards/boards-data.json')



describe('Test for re-ordering of board ', () => {
    before(() => {
      cy.login(loginDetails.email, loginDetails.password);
    });

    after(() => {
      cy.logout()
    })
  
    it('Creates a new board, re-order it to the top row and validate then delete it afterwards', () => {
      cy.addNewBoard(boardsData.boardName[0],boardsData.boardType[0])
      ProfilePage.elements.boardStatusSpan().should("exist", {timeout:10000})
      .should("have.text", "Board created")
      ProfilePage.elements.boardBackButton().click({timeout:5000})
     
      let initialPosition
        cy.contains(boardsData.boardName[0]).then($el => {
            initialPosition = $el.position()
        })
        ProfilePage.elements.boardsList().its('length').then((boardsPosition) => {
        var boardLocation

        cy.log('Number of elements with class "item": ' + boardsPosition);
        boardLocation = (boardsPosition * 2) + 1
        cy.reorderBoard(boardLocation, boardsPosition)
        })
      ProfilePage.elements.moveStatusSpan().should("exist", {timeout:10000})
      .should("have.text", "Successfully moved board")
      
      cy.reload()  
      cy.contains(boardsData.boardName[0]).then($el => {
        const newPosition = $el.position()
      expect(newPosition).to.not.deep.equal(initialPosition)
      })

      cy.deleteBoard(boardsData.boardName[0])
    })
  })
