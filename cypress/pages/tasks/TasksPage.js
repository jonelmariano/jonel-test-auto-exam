class TasksPage{

    elements = {
    addTaskButton: () =>cy.get('button.ant-btn.brokerEngine.ant-btn-default').eq(1),
    taskName: () => cy.get('[data-testid="queueTaskFormHeader-name"] > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > div > .ant-btn > span'),
    assigneeButton: () => cy.get(':nth-child(5) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > ._container_f72l3_19 > .ant-btn > span'),
    priority: () => cy.get ('span._priority_1gzj0_1'),
    dueDate: () => cy.get('.ant-form-item-control-input-content > .ant-btn > span'),
    dateTextBox: () => cy.get('.ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input'),
    saveDate:() => cy.get('button[type="button"]').contains("Save"),
    enterDescription:() => cy.get('button[type="button"]').contains("Description"),
    
    createTaskButton: () => cy.get('button[type="submit"]').contains("Create task"),
    statusSpan: () => cy.contains("New Deal created")
    }
    }
    
    module.exports = new TasksPage()