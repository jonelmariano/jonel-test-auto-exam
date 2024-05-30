class BasePage{

elements = {
newButton: () =>cy.get('button.ant-btn.brokerEngine.ant-btn-success'),
boardsButton: () => cy.get('div[class="ant-menu-submenu-title"]'),
dealsButton: () =>cy.get('a[href="/boards/deal/"]'),
tasksButton: () => cy.get('a[href="/queue/"]'),

userIcon: () => cy.get('.ant-avatar-string'),
statusSpan: () => cy.contains("New Deal created"),
logoutIcon: () => cy.get(':nth-child(2) > .ant-btn-icon'),
logoutButton: () => cy.get('.ant-btn-primary > span').contains("Log Out")
}
}

module.exports = new BasePage()