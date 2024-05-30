const BasePage = require("../pages/BasePage.js")
const LoginPage = require ("../pages/login/LoginPage.js")
const TasksPage = require ("../pages/tasks/TasksPage.js")

var loginDetails = require('../fixtures/login-details/login-details.json')
var tasksData = require('../fixtures/tasks/tasks-data.json')

describe('Create a task! ', () => {
    before(() => {
      cy.visit('/')
      cy.clearCookies()
      cy.login(loginDetails.email, loginDetails.password);
    });
  
    it('Test for creating and validating a task.', function() {
      
      BasePage.elements.tasksButton().click()
      TasksPage.elements.addTaskButton().click()
      //TasksPage.elements.taskName().type(tasksData.taskName[0]) 
      //TasksPage.elements.assigneeButton().click()
      cy.contains(tasksData.assignee[1]).click()
      //TasksPage.elements.priority().click()
    //   cy.contains(tasksData.priority[1]).next().click()
    TasksPage.elements.dueDate().click({force:true}, {animationDistanceThreshold: 20})
    TasksPage.elements.dateTextBox().type(tasksData.dueDate[0])
    TasksPage.elements.saveDate().click()
    //   TasksPage.elements.enterDescription().type(tasksData.desription)      
    });
})    