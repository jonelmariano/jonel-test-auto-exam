const BasePage = require("../pages/BasePage.js")
const LoginPage = require("../pages/login/LoginPage.js")
const ProfilePage = require("../pages/user-profile/workflow/ProfilePage.js")

var loginDetails = require('../fixtures/login-details/login-details.json')
var workflowData = require('../fixtures/workflows/workflows-data.json')

describe('Create a test for creating a loan (deal) application ', () => {
  function encodeBasicAuth(email, password) {
    return 'Basic ' + btoa(`${email}:${password}`);
  }
  beforeEach(() => {
    // cy.visit('/')
    // cy.login(loginDetails.email, loginDetails.password);
  });

  it.skip('visits the boards/deals page creates a new deal and validate', () => {
    BasePage.elements.userIcon().click()
    ProfilePage.elements.settingsList().click()
    ProfilePage.elements.workflowOption().trigger('mouseover')
    ProfilePage.elements.workflowTemplate().click()
    ProfilePage.elements.newWorkflowButton().click()
    ProfilePage.elements.workflowNameTextBox().type(workflowData.workflowName[0])
    ProfilePage.elements.selectStageComboBox().click()
    ProfilePage.elements.stageList().contains(workflowData.stage[1]).click()
    ProfilePage.elements.addStepButton().click()
    cy.contains(workflowData.stepType[2]).click()
    ProfilePage.elements.waitFor().click()
    ProfilePage.elements.waitFor().type(workflowData.waitForDays[0])
    ProfilePage.elements.days().click()
    cy.contains(workflowData.days[0]).click()
    ProfilePage.elements.saveButton().click()
    ProfilePage.elements.workflowStatusSpan().should("have.text", "Workflow saved")
    ProfilePage.elements.publishWorkflowButton().should("be.visible").click()
    ProfilePage.elements.publishWorkflowSpan().should("have.text", "Workflow published")
    //Workflow Saved!!

    //Toggle Publish Slider

    //Workflow Published!!

  });
  it('Creates a Deal using the API endpoint', () => {
    // cy.request({
    //   method: 'POST',
    //   url: '/', // Replace with your API endpoint
    //   body: {
    //     email: loginDetails.email,
    //     password: loginDetails.password
    //   },
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }) 
    // .then((response) => {
    //   expect(response.status).to.eq(201);

    // })

    const authHeader = encodeBasicAuth(loginDetails.email, loginDetails.password)
    cy.request({
      method:'POST', 
      url: 'https://dev4.brokerengine.com.au/rad-api/be_core.loanapplication/',
      headers:{
        'Authorization': authHeader,
        'Content-Type': 'application/json'
      },
      body: {
        "brokerId": "12", 
        "clientId": "459", 
        "currentBoardStage": 136, 
        "roles": [], 
        "brokerLenderId": "57", 
        "name": "Test Deal 002"
      }
    }
    )
      .then((response) => {
        expect(response.status).to.eq(201);

      })
   })  
  });
