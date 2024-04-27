// cypress/pages/SignupPage.js

class SignupPage {
    elements = {
        emailInput: () => cy.get("#email_address_textbox"),
        passwordInput: () => cy.get("#password_textbox"),
        signupUpBtn: () => cy.get("#sign_up_button"),
        signupDownBtn: () => cy.get("#signup_button")
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
        cy.get('#user_info_button').should('be.visible')
    }

    clearFields() {
        this.elements.emailInput().clear();
        this.elements.passwordInput().clear();
    }
}

module.exports = new SignupPage();