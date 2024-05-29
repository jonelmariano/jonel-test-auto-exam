const BasePage = require('../BasePage')

class DealsPage {

    newDeal = {

        dealNameTextBox: () => cy.get('input[id="newLoanApplication.name"]'),
        brokerComboBox: () => cy.get('span.ant-select-selection-item').eq(0),
        brokerList: () =>cy.get('div[id="newLoanApplication.brokerId_list"]'),
        applicantComboBox: () => cy.get('span.ant-select-selection-search').eq(1),
        addNewApplicant: () => cy.contains("Add New Applicant"),
        stageComboBox: () => cy.get('input[class="ant-select-selection-search-input"]').eq(3),
        list:() => cy.get('div[class="ant-select-item-option-content"]'),
        lenderComboBox: () => cy.get('input[class="ant-select-selection-search-input"]').eq(4),
        assignedTeamComboBox: () => cy.get('input[class="ant-select-selection-search-input"]').eq(5),
        addDealButton :() => cy.get('button.ant-btn.brokerEngine.ant-btn-primary').contains("Add Deal"),
        cancelButton :() => cy.get('input[type="button"]').contains("Cancel"),
    }


    newApplicant = {
          firstNameTextBox : () => cy.get('input[name="contact.firstName"]'),
          lastNameTextBox :() => cy.get('input[name="contact.lastName"]'),
          emailTextBox :() => cy.get('input[name="contact.email"]'),
          mobileCountryCodeDropdown :() => cy.get('span.ant-select-selection-search'),
          mobileNumberTextBox :() => cy.get('input[name="contact.mobilePhoneNumber"]'),
          cancelButton :() => cy.get('input[type="button"]').contains("Cancel"),
          addApplicantButton :() => cy.get('button.ant-btn.brokerEngine.ant-btn-primary').contains("Add Applicant"),
    }


    createdDeal = {
         dealNameTitle : () => cy.get("span._editVal_tnvhe_25").eq(0),
         brokerTitle: () => cy.get('[data-testid="loanApplicationHeader-brokerName"]'),
         applicantName: () => cy.get('[data-testid="sideMenu-client-name"]'),
         applicantPhone: () => cy.get('[data-testid="clientDetailsSummary-phoneNumber"] > .summary-data'),
         applicantEmail: () => cy.get('[data-testid="clientDetailsSummary-emailAddress"] > .summary-data'),
         dealStage: () => cy.get('[data-testid="stage-option-2"]'),
         lenderName:() => cy.get('.summary-name > a')


    }
}

module.exports = new DealsPage()