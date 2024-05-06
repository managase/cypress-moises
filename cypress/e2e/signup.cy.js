// cypress/e2e/signup.cy.js

import { faker } from '@faker-js/faker';

const SignupPage = require('../support/page_objects/signupPage');
const LoginPage = require('../support/page_objects/loginPage');
const Components = require('../support/page_objects/components');
const username = faker.internet.userName() + '@qatest.com';
const password = faker.internet.password();

describe('Signup Test', () => {

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage()
        cy.reload();
        SignupPage.visit();
      });

    it('should present a error message to enter a valid email address', () => {
        SignupPage.clickSignupBtn();
        cy.fixture('signupDataNegative.json').each((loginData) => {
            SignupPage.signup(loginData.username, loginData.password);
            SignupPage.validateLoginLabelError(loginData.errorMessage);    
            SignupPage.clearFields();
        })
    });

    it('should signup with valid credentials', { tags: '@e2e' },  () => {
        SignupPage.clickSignupBtn();
        SignupPage.signup(username, password);
        Components.validateUserInfoBtn();
        SignupPage.saveSignupUserFile(username, password);
        Components.clickUserInfoBtn();
        Components.clickUserInfoSignoutBtn();
        LoginPage.validateLoginBtn();
    });
});