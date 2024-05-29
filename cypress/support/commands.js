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
const LoginPage = require ("../pages/login/LoginPage.js")

Cypress.Commands.add('login', (email, password) => {
   LoginPage.elements.loginButton({timeout: 10000}).should('be.visible')
   LoginPage.elements.emailTextBox().type(email)
   LoginPage.elements.passwordTextBox().type(password)
   LoginPage.elements.loginButton().click()
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