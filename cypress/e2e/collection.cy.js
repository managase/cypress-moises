// cypress/e2e/collection.cy.js
import { faker } from '@faker-js/faker';

const SignupPage = require('../support/page_objects/signupPage');
const LoginPage = require('../support/page_objects/loginPage');
const Components = require('../support/page_objects/components');

describe('Collection Test', () => {

    beforeEach(() => {
        const username = faker.internet.userName() + '@qatest.com';
        const password = faker.internet.password();

        cy.clearCookies();
        cy.clearLocalStorage()
        cy.reload();
        SignupPage.visit();
        SignupPage.clickSignupBtn();
        SignupPage.signup(username, password);
        Components.validateUserInfoBtn();
        Components.clickUserInfoBtn();
    });

    afterEach(() => {
        Components.clickUserInfoBtn();
        Components.clickUserInfoSignoutBtn();
        LoginPage.validateLoginBtn();
    });

    it('should hide the specific moises collection', { tags: '@e2e' }, () => {
        Components.validateSetlistContent('Moises Collection');
        Components.clickPlaylistActionBtn_1();
        Components.clickExitSetlist();
        Components.clickDeleteCollection();

        // Click the button in case presented in the screen
        Components.clickModalShortcutsClose();
        Components.clickModalCloseBtn();
        Components.clickMoisesLogo();
        Components.validateDeleteCollection();
    });
});