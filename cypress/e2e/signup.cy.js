// cypress/e2e/signup.cy.js

import { faker } from '@faker-js/faker';

const SignupPage = require('../support/page_objects/signupPage');
const Components = require('../support/page_objects/components');
const username = faker.internet.userName() + '@qatest.com';
const password = faker.internet.password();

describe('Signup Test', () => {

    beforeEach(() => {
        SignupPage.visit();
    });

    after(() => {
        cy.writeFile('cypress.env.json', { 
            "username": username,
            "password": password
          });
    });

    it('should present a error message to enter a valid email address', () => {
        SignupPage.clickSignupBtn();
        cy.fixture('signupDataNegative.json').each((loginData) => {
            SignupPage.signup(loginData.username, loginData.password);
                cy.get('.email-password-sign-in_labelError___Bgrm').as('labelError').should('be.visible')
                cy.get('@labelError').contains(loginData.errorMessage);
            SignupPage.clearFields();
        })
    });

    it('should signup with valid credentials', { tags: '@e2e' },  () => {
        SignupPage.clickSignupBtn();
        SignupPage.signup(username, password);
        cy.get('#user_info_button').should('be.visible')
        Components.clickUserInfoBtn();
        Components.clickUserInfoSignoutBtn();
        cy.get('#login_button').should('be.visible')
    });
});