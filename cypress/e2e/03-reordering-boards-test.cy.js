const BasePage = require("../pages/BasePage.js")
const LoginPage = require ("../pages/login/LoginPage.js")
const ProfilePage = require ("../pages/user-profile/workflow/ProfilePage.js")

var loginDetails = require('../fixtures/login-details/login-details.json')
var boardsData = require('../fixtures/boards/boards-data.json')



describe('Create a test for creating a loan (deal) application ', () => {
    before(() => {
      cy.visit('/')
      cy.login(loginDetails.email, loginDetails.password);
    });
  
    it('visits the boards/deals page creates a new deal and validate', () => {
      BasePage.elements.userIcon().click()
      ProfilePage.elements.settingsList().click()
      ProfilePage.elements.workflowOption().trigger('mouseover')
      ProfilePage.elements.boardsAndStages().click()
      ProfilePage.elements.newBoardButton().click()
      ProfilePage.elements.boardName().type(boardsData.boardName[0])
      ProfilePage.elements.boardType().click()
      cy.contains(boardsData.boardType[0]).click()
      ProfilePage.elements.saveButton().click({force:true})
      ProfilePage.elements.boardStatusSpan().should("have.text", "Board created")
      ProfilePage.elements.boardBackButton().click()

      ProfilePage.elements.boardName().should("have.text")
      
      for(var i=0; i < boardsData.boardPositions[0]; i++){
        cy.realPress('Tab')

      }
      cy.realPress('Space')
      for(var i=0; i < boardsData.boardPositions[3]; i++){
        cy.realPress('ArrowUp')

      }
      cy.realPress('Space')
      
      


      

      
    });


    it('', () => {
    
        
    })
  });
