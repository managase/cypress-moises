// cypress/pages/loginPage.js

class LoginPage {
    elements = {
        emailInput: () => cy.get("#email_address_textbox"),
        passwordInput: () => cy.get("#password_textbox"),
        loginBtn: () => cy.get("#login_button"),
        loginLabelError: () => cy.get('.email-password-sign-in_labelError___Bgrm'),
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

    validateLoginBtn() {
        this.elements.loginBtn().as('btnLogin')
        cy.get('@btnLogin').should('be.visible')
    }

    validateLoginLabelError(errorMessage) {
        this.elements.loginLabelError().as('labelError')
        cy.get('@labelError').should('be.visible').contains(errorMessage);
    }

    clearFields() {
        this.elements.emailInput().clear();
        this.elements.passwordInput().clear();
    }
}

module.exports = new LoginPage();