// cypress/e2e/login.cy.js

const LoginPage = require('../support/page_objects/loginPage');
const Components = require('../support/page_objects/components');

describe('Login Test', () => {

    beforeEach(() => {
            LoginPage.visit();
      });

    it('should present a error message to enter a valid email address', () => {
        cy.fixture('loginDataNegative.json').each((loginData) => {
            LoginPage.login(loginData.username, loginData.password);
                cy.get('.email-password-sign-in_labelError___Bgrm').as('labelError').should('be.visible')
                cy.get('@labelError').contains(loginData.errorMessage);
            LoginPage.clearFields();
        })
    });

    it('should login with valid credentials', () => {      
        const username = Cypress.env('username')
        const password = Cypress.env('password')
        LoginPage.login(username, password);
        Components.clickMoisesLogo();
    });
});