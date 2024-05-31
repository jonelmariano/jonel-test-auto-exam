class TasksPage{

    elements = {
    addTaskButton: () =>cy.get('button.ant-btn.brokerEngine.ant-btn-default').eq(1),
    taskName: () => cy.get('[data-testid="queueTaskFormHeader-name"] > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > div > .ant-btn > span'),
    assigneeButton: () => cy.get(':nth-child(5) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > ._container_f72l3_19 > .ant-btn > span'),
    priority: () => cy.get ('span._priority_1gzj0_1'),
    dueDate: () => cy.get('.ant-form-item-control-input-content > .ant-btn > span'),
    dueDate2 :() => cy.get('svg[data-icon="right"]'),
    dateTextBox: () => cy.get('.ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input'),
    saveDate:() => cy.get('button[type="button"]').contains("Save"),
    description:() => cy.get(':nth-child(8) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > div > .ant-btn > span'),
    enterDescription: () => cy.get('.ck-editor__main > .ck'),
    createTaskButton: () => cy.get('button[type="submit"]').contains("Create task"),
    statusSpan: () => cy.contains("New task created"),

    findTask:() => cy.get('[data-testid="queue-search"]'),
    clearFiltersButton : () => cy.get('._headerClearBtn_wh1bx_21 > span')

    }
    

    createdTask = {
        
        taskNameTitle : () => cy.get('._nameInput_18qsb_43 > .ant-btn > span'),
        assignee: () => cy.get('span._name_6hf7a_5'),
        priority: () => cy.get('.ant-form-item-control-input-content > ._container_f72l3_19 > .ant-btn > :nth-child(1) > [data-testid="priorityFormatter-priority"]'),
        dueDate: () => cy.get('.ant-form-item-control-input-content > .ant-btn > span'),
        description: () => cy.get('._ckContent_27gpd_41 > p'),
        completeButton:() =>cy.contains(" Complete"),
        closeSlider:() => cy.get('[data-testid="queueTaskFormHeader-closeSlider"] > .ant-btn-icon')
   }




    }
    
    module.exports = new TasksPage()