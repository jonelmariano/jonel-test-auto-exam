class BasePage{

elements = {
newButton: () =>cy.get('button.ant-btn.brokerEngine.ant-btn-success'),
boardsButton: () => cy.get('div[class="ant-menu-submenu-title"]'),
dealsButton: () =>cy.get('a[href="/boards/deal/"]')

}
}

module.exports = new BasePage()