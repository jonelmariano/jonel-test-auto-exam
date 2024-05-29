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