const BasePage = require("../pages/BasePage.js")
const LoginPage = require ("../pages/login/LoginPage.js")
const DealsPage = require ("../pages/boards/DealsPage.js")


describe('Create a test for creating a loan (deal) application ', () => {
    const email = 'test+auto7@brokerengine.com.au'
    const password = 't^WSbPgE1ud506Gz'
  
    before(() => {
      cy.visit('/')
      cy.login(email, password);
    });
  
    it('visits the boards/deals page creates a new deal and validate', () => {
       BasePage.elements.boardsButton().click()
       BasePage.elements.dealsButton().click()
       BasePage.elements.newButton().click()
       DealsPage.newDeal.dealNameTextBox().type("Sample Deal Name")
       DealsPage.newDeal.brokerComboBox().click()
       DealsPage.newDeal.brokerList().contains("Stella Kirby").click()
       DealsPage.newDeal.applicantComboBox().click()
       DealsPage.newDeal.addNewApplicant().click()

       DealsPage.newApplicant.firstNameTextBox().type("Yskaela")
       DealsPage.newApplicant.lastNameTextBox().type("Fujimoto")
       DealsPage.newApplicant.emailTextBox().type("test+auto007@brokerengine.com.au")
       //DealsPage.newApplicant.mobileCountryCodeDropdown().click()
       DealsPage.newApplicant.mobileNumberTextBox().type("412345678")
       DealsPage.newApplicant.addApplicantButton().click()
       
       DealsPage.newDeal.dealNameTextBox({timeout: 10000}).should('be.visible')
       DealsPage.newDeal.stageComboBox().click()
       DealsPage.newDeal.list().contains("2 Prepare for Submission").click()
       DealsPage.newDeal.lenderComboBox().click()
       DealsPage.newDeal.list().contains("Powell Group").click()
    //    DealsPage.newDeal.assignedTeamComboBox().click()
    //    DealsPage.newDeal.list().contains("Christine Chung").click()
       DealsPage.newDeal.addDealButton().click()
       
       cy.url().should('include'), ('/applications')

    });
    it('', () => {
    
        
    })
  });
