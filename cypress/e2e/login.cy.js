// cypress/e2e/login.cy.js

const LoginPage = require('../support/page_objects/loginPage');
const Components = require('../support/page_objects/components');

describe('Login Test', () => {

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage()
        cy.reload();
        LoginPage.visit();
      });

    it('should present a error message to enter a valid email address', () => {
        cy.fixture('loginDataNegative.json').each((loginData) => {
            LoginPage.login(loginData.username, loginData.password);
            LoginPage.validateLoginLabelError(loginData.errorMessage);    
            LoginPage.clearFields();
        });
    });

    it('should login with valid credentials', () => {      
        cy.fixture('login.json').then((loginData) => {
            LoginPage.login(loginData.username, loginData.password);
            Components.validateUserInfoBtn();
        });
    });
});