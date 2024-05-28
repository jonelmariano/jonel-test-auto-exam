const BasePage = require('../BasePage')

class DealsPage {

    newDeal = {

        dealNameTextBox: () => cy.get('input[name="name"]'),
        brokerComboBox: () => cy.get('span.ant-select-arrow').eq(0),
        applicantComboBox: () => cy.get('span.ant-select-arrow').eq(1),
        addNewApplicant: () => cy.contains("Add New Applicant"),
        stageComboBox: () => cy.get('span.ant-select-arrow').eq(2),
        lenderComboBox: () => cy.get('span.ant-select-arrow').eq(3),
    }


    newApplicant = {
          firstNameTextBox : () => cy.get('input[name="contact.firstName"]'),
          lastNameTextBox :() => cy.get('input[name="contact.lastName"]'),
          emailTextBox :() => cy.get('input[name="contact.email"]'),
          mobileCountryCodeDropdown :() => cy.get('span.ant-select-selection-search'),
          mobileNumberTextBox :() => cy.get('input[name="contact.mobilePhoneNumber"]'),
          cancelButton :() => cy.get('input[type="button"]').contains("Cancel"),
          addApplicantButton :() => cy.get('input[type="button"]').contains("Add Applicant"),

    }
}