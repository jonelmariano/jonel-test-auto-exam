const BasePage = require("../pages/BasePage.js")
const LoginPage = require("../pages/login/LoginPage.js")
const TasksPage = require("../pages/tasks/TasksPage.js")

const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

var loginDetails = require('../fixtures/login-details/login-details.json')
var tasksData = require('../fixtures/tasks/tasks-data.json')

describe('Create a task! ', () => {
    before(() => {
        cy.visit('/')
        cy.clearCookies()
        cy.login(loginDetails.email, loginDetails.password);
    });

    it('Test for creating and validating a task.', function () {

        BasePage.elements.tasksButton().click()
        TasksPage.elements.addTaskButton().click()
        TasksPage.elements.taskName().type(tasksData.taskName[0]) 
        TasksPage.elements.assigneeButton().click()
        cy.contains(tasksData.assignee[1]).click()
        TasksPage.elements.dueDate().click()
        cy.wait(5000)
        cy.get('svg[data-icon="right"]').click({ force: true })
        cy.get('[title="2024-06-29"] > .ant-picker-cell-inner > .ant-picker-calendar-date-value').click({ force: true })
        TasksPage.elements.saveDate().click({ force: true })
        TasksPage.elements.description().click()
        TasksPage.elements.enterDescription().type(tasksData.description)
        TasksPage.elements.createTaskButton().click({ force: true })

        TasksPage.elements.statusSpan().should("exist", { timeout: 10000 })
            .should("have.text", "New task created")
        
        TasksPage.createdTask.taskNameTitle().should("have.text", tasksData.taskName[0])  
        TasksPage.createdTask.assignee().should("have.text", tasksData.assignee[1])
        TasksPage.createdTask.priority().should("have.text", "Low")  
        TasksPage.createdTask.dueDate().should("have.text", "30 Jun 2024")
        TasksPage.createdTask.description().should("have.text", tasksData.description)
        TasksPage.createdTask.closeSlider().click()

        TasksPage.elements.findTask().type(tasksData.taskName[0])
        cy.get('span[data-toggl="taskRow-name"]').should("have.text", tasksData.taskName[0]) 
        cy.get('span[class="_priority_1gzj0_1"]').should("have.text", "Low")
        cy.get('span[class="_editVal_tnvhe_25"]').should("contain.text", tasksData.dueDate[0])
        cy.get('span[class="_name_6hf7a_5 _isTruncatable_6hf7a_8"]').should("have.text", tasksData.assignee[1])
        
        cy.get('._checkboxCell_1rslw_60 > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
        cy.get('[data-testid="queueListMoreActions-actionButton"] > .ant-btn-icon').click()
        cy.contains("Export (.xls)").click()
        
        const downloadsFolder = Cypress.config("C:\Users\jonel\OneDrive\Documents\jonel-test-auto-exam\cypress\downloads")
        const downloadedFileName = path.join(downloadsFolder, '*.xls')

        cy.readFile(downloadedFileName, { timeout: 15000 }).should('exist')
        cy.readFile(downloadedFileName, 'binary').then((fileContent) => {
            const workbook = XLSX.read(fileContent, { type: 'binary' })
            
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName]

            const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 })
            expect(sheetData[1][0]).to.equal(tasksData.taskName[0])
            expect(sheetData[1][5]).to.equal(tasksData.priority[0])
            expect(sheetData[1][6]).to.equal("30-06-2024")
            expect(sheetData[1][8]).to.equal(tasksData.assignee[1])
            expect(sheetData[1][9]).to.contain("30-05-2024")

        })

    });
    
})    