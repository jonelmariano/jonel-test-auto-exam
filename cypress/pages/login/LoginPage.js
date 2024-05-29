class LoginPage{

    elements = {

    emailTextBox: () => cy.get('input[type="email"]'),
    passwordTextBox: () => cy.get('input[type="password"]'), 
    loginButton: () => cy.get('button[type="submit"]'),
    forgotPassword: () => cy.get('a[href="/password-reset/"]') 

    }
}

module.exports = new LoginPage()