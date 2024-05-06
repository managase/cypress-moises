// cypress/pages/SignupPage.js

class SignupPage {
    elements = {
        emailInput: () => cy.get("#email_address_textbox"),
        passwordInput: () => cy.get("#password_textbox"),
        signupUpBtn: () => cy.get("#sign_up_button"),
        signupDownBtn: () => cy.get("#signup_button"),
        loginLabelError: () => cy.get('.email-password-sign-in_labelError___Bgrm'),
    }

    visit() {
        cy.visit('/login');
    }

    clickSignupBtn(email, password) {
        this.elements.signupUpBtn().as('btnSignupUp')
        cy.get('@btnSignupUp').click();
    }

    signup(email, password) {
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);
        this.elements.signupDownBtn().as('btnSignupDown').should('be.visible')
        cy.get('@btnSignupDown').click();
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

    saveSignupUserFile(username, password) {
        cy.writeFile('cypress/fixtures/login.json', { 
            "username": username,
            "password": password
        });
    }
}

module.exports = new SignupPage();