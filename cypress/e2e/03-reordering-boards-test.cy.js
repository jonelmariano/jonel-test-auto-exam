const BasePage = require("../pages/BasePage.js")
const LoginPage = require ("../pages/login/LoginPage.js")
const ProfilePage = require ("../pages/user-profile/workflow/ProfilePage.js")

var loginDetails = require('../fixtures/login-details/login-details.json')

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
      ProfilePage.elements.boardName().type("Sample Board 1")
      ProfilePage.elements.boardType().click()
      cy.contains("Switch").click()
      ProfilePage.elements.saveButton().click({force:true})
      
      cy.visit('/myprofile/boards/')

      
    });
    it('', () => {
    
        
    })
  });
