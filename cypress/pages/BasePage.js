class BasePage{

elements = {
newButton: () =>cy.get('button.ant-btn.brokerEngine.ant-btn-success'),
boardsButton: () => cy.get('div[class="ant-menu-submenu-title"]'),
dealsButton: () =>cy.get('a[href="/boards/deal/"]'),

userIcon: () => cy.get('.ant-avatar-string'),
statusSpan: () => cy.contains("New Deal created")
}
}

module.exports = new BasePage()