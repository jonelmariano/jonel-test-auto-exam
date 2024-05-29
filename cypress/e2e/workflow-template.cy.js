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
      ProfilePage.elements.workflowTemplate().click()
      cy.reload()
      ProfilePage.elements.newWorkflowButton().click()
      ProfilePage.elements.workflowNameTextBox().type("New Workflow Test")
      ProfilePage.elements.selectStageComboBox().click()
      ProfilePage.elements.stageList().contains("2 Prepare for Submission").click()
      ProfilePage.elements.addStepButton().click()
      cy.contains("Delay").click()
      ProfilePage.elements.waitFor().click()
      ProfilePage.elements.waitFor().type('5')
      ProfilePage.elements.days().click()
      cy.contains("Business Days").click()
      ProfilePage.elements.saveButton().click()

    });
    it('', () => {
    
        
    })
  });
