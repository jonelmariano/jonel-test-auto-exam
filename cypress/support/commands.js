const BasePage = require("../pages/BasePage.js")
const LoginPage = require ("../pages/login/LoginPage.js")
const ProfilePage = require ("../pages/user-profile/workflow/ProfilePage.js")
const DealsPage = require ("../pages/boards/DealsPage.js")


import * as XLSX from 'xlsx';


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
   BasePage.elements.boardsButton().click()
   BasePage.elements.dealsButton().click()
   BasePage.elements.newButton().click()
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


Cypress.Commands.add('addNewBoard', (boardName, boardType) => {
   BasePage.elements.userIcon().click()
   ProfilePage.elements.settingsList().click()
   ProfilePage.elements.workflowOption().trigger('mouseover')
   ProfilePage.elements.boardsAndStages().click()
   ProfilePage.elements.newBoardButton().click()
   ProfilePage.elements.boardName().type(boardName)
   ProfilePage.elements.boardType().click()
   cy.contains(boardType).click()
   ProfilePage.elements.saveButton().click({force:true})
})   

Cypress.Commands.add('createTask', (taskName, assignee, description) => {
    BasePage.elements.tasksButton().click()
    TasksPage.elements.addTaskButton().click()
    TasksPage.elements.taskName().type(taskName) 
    TasksPage.elements.assigneeButton().click({force:true})
    cy.get('.ant-radio-wrapper').contains(assignee).click({force:true})
    TasksPage.elements.dueDate().click()
     cy.wait(5000)
     cy.get('svg[data-icon="right"]').click({ force: true })
    TasksPage.elements.saveDate().click({ force: true })
    TasksPage.elements.description().click()
    TasksPage.elements.enterDescription().type(description)
    TasksPage.elements.createTaskButton().click({ force: true })
})

Cypress.Commands.add('exportTask', () => {
    TasksPage.taskRow.rowCheckBox().click()
    TasksPage.taskRow.moreActions().click()
    cy.contains("Export (.xls)").click()
    cy.wait(10000)
    
})

Cypress.Commands.add('reorderBoard', (x,y) => {
   for(var i=0; i < x; i++){
     cy.realPress('Tab')
   }
   cy.realPress('Space')
   for(var i=0; i < y; i++){
     cy.realPress('ArrowUp')
   }
   cy.realPress('Space')
})   


Cypress.Commands.add('deleteBoard', (boardName) => {
    cy.contains(boardName).click() 
    cy.contains("Delete Board").click()
    cy.contains("OK").click()
})



Cypress.on('uncaught:exception', (err, runnable) => {
   // Ignore ResizeObserver loop error
   if (err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
     return false
   }
 
   // Allow other exceptions to be thrown
   return true
 })

 Cypress.on('uncaught:exception', (err, runnable) => {
    // We can log the error to the console or perform other actions here
    console.error('Uncaught exception:', err);
  
    // Return false to prevent Cypress from failing the test
    return false;
  });

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

Cypress.Commands.add('readFileByText', (directory, text) => {
    cy.task('findFileByText', { directory, text }).then((filePath) => {
      return cy.readFile(filePath);
    });
  });


Cypress.Commands.add('readExcel', (filePath) => {
    return cy.readFile(filePath, 'binary').then((content) => {
      const workbook = XLSX.read(content, { type: 'binary' });
      return workbook;
    });
  });

Cypress.Commands.add('deleteCard', () => {
   DealsPage.dealSettings.cardSettings().click(),
   DealsPage.dealSettings.deleteCard().click(),
   DealsPage.dealSettings.deleteButton().click({force:true})
});

