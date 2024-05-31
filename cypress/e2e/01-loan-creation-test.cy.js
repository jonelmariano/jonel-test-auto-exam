const BasePage = require("../pages/BasePage.js")
const LoginPage = require ("../pages/login/LoginPage.js")
const DealsPage = require ("../pages/boards/DealsPage.js")

var loginDetails = require('../fixtures/login-details/login-details.json')
var dealsData = require('../fixtures/deals/deals-data.json')

describe('Create a test for creating a loan (deal) application ', () => {
    before(() => {
      cy.login(loginDetails.email, loginDetails.password)
    });

    after(() => {
      cy.logout()
    })
  
    it('Creates, Validates and Delete the created loan', function() {
      cy.addNewDeal(dealsData.dealName[0], dealsData.brokerName[0], dealsData.applicantFirstName[0], dealsData.applicantLastName[1], 
        dealsData.email[0], dealsData.mobile[0], dealsData.stage[1], dealsData.lender[2])

       BasePage.elements.statusSpan().should("exist", {timeout:10000})
       .should("have.text", "New Deal created")
       cy.wait(10000)
       DealsPage.createdDeal.dealNameTitle().should("be.visible", {timeout:10000})
       .should("contain.text", dealsData.dealName[0])
       DealsPage.createdDeal.brokerTitle().should("have.text", dealsData.brokerName[0])
       DealsPage.createdDeal.applicantName().should("have.text", dealsData.applicantFirstName[0] +" "+dealsData.applicantLastName[1]+" ")
       DealsPage.createdDeal.applicantPhone().should("have.text", "+61 "+dealsData.mobile[0])
       DealsPage.createdDeal.applicantEmail().should("have.text", dealsData.email[0])
       DealsPage.createdDeal.dealStage().should("contain.text", dealsData.stage[1])
       DealsPage.createdDeal.lenderName().should("have.text", dealsData.lender[2])
      
      cy.deleteCard()
    });
  });
