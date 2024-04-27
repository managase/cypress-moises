// cypress/pages/loginPage.js

class LoginPage {
    elements = {
        emailInput: () => cy.get("#email_address_textbox"),
        passwordInput: () => cy.get("#password_textbox"),
        loginBtn: () => cy.get("#login_button"),
    }

    visit() {
        cy.visit('/login');
    }

    login(email, password) {
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);
        this.elements.loginBtn().as('btnLogin')
        cy.get('@btnLogin').click();
    }

    clearFields() {
        this.elements.emailInput().clear();
        this.elements.passwordInput().clear();
    }
}

module.exports = new LoginPage();