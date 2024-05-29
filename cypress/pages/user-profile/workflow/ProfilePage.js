class ProfilePage{

    elements = {
        settingsList: () => cy.get('button[type="button"]').contains("Personal Details"),
        workflowOption:() => cy.contains("Workflow"),
        workflowTemplate:() => cy.get('a[href="/my-profile/workflow-templates/"]'),
        boardsAndStages:() => cy.get('a[href="/my-profile/boards/"]'),
        newWorkflowButton:() => cy.get('[data-testid="workflow-create"] > :nth-child(2)'),
        newBoardButton:() => cy.get('a[href="/my-profile/boards/new/"]'),
        boardType:() => cy.get('input[id="be_loan_board.loanboard.boardType"]'),
        workflowNameTextBox:() => cy.get('input[id="be_workflows.customworkflow.name"]'),
        selectStageComboBox:() => cy.get('[data-testid="test-workflow-stage"] > .ant-select-selector'),
        stageList:() => cy.get('div[class="ant-select-item-option-content"]'),
        addStepButton:() => cy.get('[data-testid="workflowAddNodeButton-button"] > :nth-child(2)'),
        //stepList:() => cy.get('li[class="ant-dropdown-menu-item.ant-dropdown-menu-item-only-child"]')
        waitFor:() => cy.get('[data-testid="workflow-delayWait"]'),
        days: () => cy.get('.ant-input-group-addon > .ant-select > .ant-select-selector > .ant-select-selection-item'),
        saveButton: () => cy.get('button[type="submit"]').contains("Save"),
        boardName: () => cy.get('input[id="be_loan_board.loanboard.name"]'),
        workflowStatusSpan: () => cy.contains("Workflow saved"),
        publishWorkflowButton: () => cy.get('button[role="switch"]'),
        publishWorkflowSpan:() => cy.contains("Workflow published"),
        boardStatusSpan: () => cy.contains("Board created"),
        boardBackButton: () => cy.get('._backBtn_y84ky_25')
        
    }
}    
module.exports = new ProfilePage()