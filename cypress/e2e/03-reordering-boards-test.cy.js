const BasePage = require("../pages/BasePage.js")
const LoginPage = require ("../pages/login/LoginPage.js")
const ProfilePage = require ("../pages/user-profile/workflow/ProfilePage.js")

var loginDetails = require('../fixtures/login-details/login-details.json')
var boardsData = require('../fixtures/boards/boards-data.json')

const desiredElementSelector = '.ant-card-body > :nth-child(1) > :nth-child(1)'

describe('Create a test for creating a loan (deal) application ', () => {
    before(() => {
      cy.visit('/')
      cy.login(loginDetails.email, loginDetails.password);
    });
  
    it('visits the boards/deals page creates a new deal and validate', () => {
      BasePage.elements.userIcon().click()
      ProfilePage.elements.settingsList().click()
      ProfilePage.elements.workflowOption().trigger('mouseover')
      ProfilePage.elements.boardsAndStages().click()
      ProfilePage.elements.newBoardButton().click()
      ProfilePage.elements.boardName().type(boardsData.boardName[0])
      ProfilePage.elements.boardType().click()
      cy.contains(boardsData.boardType[0]).click()
      ProfilePage.elements.saveButton().click({force:true})
      ProfilePage.elements.boardStatusSpan().should("have.text", "Board created")
      ProfilePage.elements.boardBackButton().click()
      //cy.contains(boardsData.boardName[0]).click()
      //cy.get('.ant-card-body > :nth-child(1) > :nth-child(1)').dragAndDrop('.ant-card-body > :nth-child(1) > :nth-child(1)','.ant-card-body > :nth-child(1) > :nth-child(5)')
      
      const checkIfFocused = () => {
        return cy.focused().then($el => {
          return $el.is(desiredElementSelector);
        });
      };
      
      const tabUntilFocused = () => {
        checkIfFocused().then(isFocused => {
          if (!isFocused) {
            // Press tab key
            cy.get('body').tab();
            // Call the function recursively
            tabUntilFocused();
          } else {
            // Log success message
            cy.log('Desired element is focused');
          }
        })
      }    


      

      
    });
    it('', () => {
    
        
    })
  });
