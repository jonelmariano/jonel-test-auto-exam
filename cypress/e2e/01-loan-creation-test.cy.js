const BasePage = require("../pages/BasePage.js")
const LoginPage = require ("../pages/login/LoginPage.js")
const DealsPage = require ("../pages/boards/DealsPage.js")

var loginDetails = require('../fixtures/login-details/login-details.json')
var dealsData = require('../fixtures/deals/deals-data.json')

describe('Create a test for creating a loan (deal) application ', () => {
    before(() => {
      cy.visit('/')
      cy.login(loginDetails.email, loginDetails.password);
    });

    after(() => {
      // cy.get('[data-testid="settings-menu"]').click()
      // cy.contains("Delete Card").click()
      // cy.contains("Delete").click({force:true})
      //cy.logout()
    })
  
    it('Test for creating a lon(deal) application', function() {
       BasePage.elements.boardsButton().click()
       BasePage.elements.dealsButton().click()
       BasePage.elements.newButton().click()

       DealsPage.newDeal.dealNameTextBox().type(dealsData.dealName[0])
       DealsPage.newDeal.brokerComboBox().click()
       DealsPage.newDeal.brokerList().contains(dealsData.brokerName[1]).click()
       DealsPage.newDeal.applicantComboBox().click()
       DealsPage.newDeal.addNewApplicant().click()

       DealsPage.newApplicant.firstNameTextBox().type(dealsData.applicantFirstName[0])
       DealsPage.newApplicant.lastNameTextBox().type(dealsData.applicantLastName[1])
       DealsPage.newApplicant.emailTextBox().type(dealsData.email[0])
       DealsPage.newApplicant.mobileNumberTextBox().type(dealsData.mobile[0])
       DealsPage.newApplicant.addApplicantButton().click()
       
       DealsPage.newDeal.dealNameTextBox({timeout: 10000}).should('be.visible')
       DealsPage.newDeal.stageComboBox().click()
       DealsPage.newDeal.list().contains(dealsData.stage[1]).click()
       DealsPage.newDeal.lenderComboBox().click()
       DealsPage.newDeal.list().contains(dealsData.lender[2]).click()
       DealsPage.newDeal.addDealButton().click()

       BasePage.elements.statusSpan().should("have.text", "New Deal created")
       cy.wait(5000)
       DealsPage.createdDeal.dealNameTitle().should("contain.text", dealsData.dealName[0])
       DealsPage.createdDeal.brokerTitle().should("have.text", dealsData.brokerName[1])
       DealsPage.createdDeal.applicantName().should("have.text", dealsData.applicantFirstName[0] +" "+dealsData.applicantLastName[1]+" ")
       DealsPage.createdDeal.applicantPhone().should("have.text", "+61 "+dealsData.mobile[0])
       DealsPage.createdDeal.applicantEmail().should("have.text", dealsData.email[0])
       DealsPage.createdDeal.dealStage().should("contain.text", dealsData.stage[1])
       DealsPage.createdDeal.lenderName().should("have.text", dealsData.lender[2])

       cy.get('[data-testid="settings-menu"]').click()
       cy.contains("Delete Card").click()
       cy.contains("Delete").click({force:true})
       //cy.logout na lang siguro sa after all mo ilagay.

      
    });
    it('', function() { 
     
    })
  });
