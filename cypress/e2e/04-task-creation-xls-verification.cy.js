const BasePage = require("../pages/BasePage.js")
const LoginPage = require("../pages/login/LoginPage.js")
const TasksPage = require("../pages/tasks/TasksPage.js")

const XLSX = require('xlsx');
//const path = require('path');
const fs = require('fs');

var loginDetails = require('../fixtures/login-details/login-details.json')
var tasksData = require('../fixtures/tasks/tasks-data.json')
var selectedDate

describe('Create a task! ', () => {
    before(() => {
        cy.visit('/')
        cy.clearCookies()
        cy.login(loginDetails.email, loginDetails.password);
    });

    it('Test for creating and validating a task.', function () {
        cy.createTask(tasksData.taskName[0], tasksData.assignee[0], tasksData.description)

        TasksPage.elements.statusSpan().should("exist", { timeout: 10000 })
            .should("have.text", "New task created")
        
        TasksPage.createdTask.taskNameTitle().should("have.text", tasksData.taskName[0])  
        TasksPage.createdTask.assignee().should("have.text", tasksData.assignee[0])
        TasksPage.createdTask.priority().should("have.text", "Low")  
        TasksPage.createdTask.dueDate().should("have.text", tasksData.dueDate[3])
        TasksPage.createdTask.description().should("have.text", tasksData.description)

        TasksPage.createdTask.closeSlider().click()
        TasksPage.elements.findTask().type(tasksData.taskName[0])      
 
        TasksPage.taskRow.taskRowName().should("have.text", tasksData.taskName[0]) 
        TasksPage.taskRow.priorityRow().should("have.text", "Low")
        TasksPage.taskRow.dueDateRow().should("contain.text", tasksData.dueDate[0])
        TasksPage.taskRow.assigneeRow().should("have.text", tasksData.assignee[0])
        
        cy.exportTask()
    })
    
    it('Should read the download tasks file and validate its contents in excel', () => {
        
        const filePath = 'cypress/downloads/tasks.xlsx'
          
        cy.readExcel(filePath).then((workbook) => {
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const data = XLSX.utils.sheet_to_json(sheet);
          
          expect(sheetData[1][0]).to.equal(tasksData.taskName[0])
          expect(sheetData[1][5]).to.equal(tasksData.priority[0])
          expect(sheetData[1][6]).to.equal("03-07-2024")
          expect(sheetData[1][8]).to.equal(tasksData.assignee[1])
          expect(sheetData[1][9]).to.contain("03-06-2024")
         
        })
    })
})    