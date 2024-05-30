// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
const BasePage = require("../pages/BasePage.js")
const LoginPage = require ("../pages/login/LoginPage.js")
const DealsPage = require ("../pages/boards/DealsPage.js")

Cypress.Commands.add('login', (email, password) => {
   cy.visit('/')
   LoginPage.elements.loginButton({timeout: 10000}).should('be.visible')
   LoginPage.elements.emailTextBox().type(email)
   LoginPage.elements.passwordTextBox().type(password)
   LoginPage.elements.loginButton().click()
})

Cypress.Commands.add('logout', () => {
   cy.visit('/')
   BasePage.elements.logoutIcon().click()
   BasePage.elements.logoutButton().click()
})



Cypress.Commands.add('addNewDeal', (dealName, brokerName, applicantFirstName, applicantLastName, email, mobile, stage, lender) => {
   DealsPage.newDeal.dealNameTextBox().type(dealName)
   DealsPage.newDeal.brokerComboBox().click()
   DealsPage.newDeal.brokerList().contains(brokerName).click()
   DealsPage.newDeal.applicantComboBox().click()
   DealsPage.newDeal.addNewApplicant().click()

   DealsPage.newApplicant.firstNameTextBox().type(applicantFirstName)
   DealsPage.newApplicant.lastNameTextBox().type(applicantLastName)
   DealsPage.newApplicant.emailTextBox().type(email)
   DealsPage.newApplicant.mobileNumberTextBox().type(mobile)
   DealsPage.newApplicant.addApplicantButton().click()
   
   DealsPage.newDeal.dealNameTextBox({timeout: 10000}).should('be.visible')
   DealsPage.newDeal.stageComboBox().click()
   DealsPage.newDeal.list().contains(stage).click()
   DealsPage.newDeal.lenderComboBox().click()
   DealsPage.newDeal.list().contains(lender).click()
   DealsPage.newDeal.addDealButton().click()
})














//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.on('uncaught:exception', (err, runnable) => {
   // Ignore ResizeObserver loop error
   if (err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
     return false
   }
 
   // Allow other exceptions to be thrown
   return true
 })

 Cypress.Commands.add('dragAndDrop', (subject, target) => {
   Cypress.log({
       name: 'DRAGNDROP',
       message: `Dragging element ${subject} to ${target}`,
       consoleProps: () => {
           return {
               subject: subject,
               target: target
           };
       }
   });
   const BUTTON_INDEX = 0;
   const SLOPPY_CLICK_THRESHOLD = 10;
   cy.get(target)
       .first()
       .then($target => {
           let coordsDrop = $target[0].getBoundingClientRect();
           cy.get(subject)
               .first()
               .then(subject => {
                   const coordsDrag = subject[0].getBoundingClientRect();
                   cy.wrap(subject)
                       .trigger('mousedown', {
                           button: BUTTON_INDEX,
                           clientX: coordsDrag.x,
                           clientY: coordsDrag.y,
                           force: true
                       })
                       .trigger('mousemove', {
                           button: BUTTON_INDEX,
                           clientX: coordsDrag.x + SLOPPY_CLICK_THRESHOLD,
                           clientY: coordsDrag.y,
                           force: true
                       });
                   cy.get('body')
                       .trigger('mousemove', {
                           button: BUTTON_INDEX,
                           clientX: coordsDrop.x,
                           clientY: coordsDrop.y,
                           force: true            
                       })
                       .trigger('mouseup');
               });
       });
});


Cypress.Commands.add('deleteCard', () => {
   DealsPage.dealSettings.cardSettings().click(),
   DealsPage.dealSettings.deleteCard().click(),
   DealsPage.dealSettings.deleteButton().click({force:true})
});

