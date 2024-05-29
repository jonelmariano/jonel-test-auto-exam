const BasePage = require("../pages/BasePage.js")
const LoginPage = require ("../pages/login/LoginPage.js")
const ProfilePage = require ("../pages/user-profile/workflow/ProfilePage.js")


describe('Create a test for creating a loan (deal) application ', () => {
    const email = 'test+auto7@brokerengine.com.au'
    const password = 't^WSbPgE1ud506Gz'
  
    before(() => {
      cy.visit('/')
      cy.login(email, password);
    });
  
    it('visits the boards/deals page creates a new deal and validate', () => {
      BasePage.elements.userIcon().click()
      ProfilePage.elements.settingsList().click()
      ProfilePage.elements.workflowOption().trigger('mouseover')
      ProfilePage.elements.boardsAndStages().click()
      ProfilePage.elements.newBoardButton().click()
      ProfilePage.elements.boardName().type("Sample Board 1")
      ProfilePage.elements.boardType().click()
      cy.contains("Switch").click()
      

      
    });
    it('', () => {
    
        
    })
  });
