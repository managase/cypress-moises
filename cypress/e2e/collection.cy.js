// cypress/e2e/collection.cy.js

const LoginPage = require('../support/page_objects/loginPage');
const Components = require('../support/page_objects/components');

describe('Collection Test', () => {

    beforeEach(() => {
        const username = Cypress.env('username')
        const password = Cypress.env('password')
        LoginPage.visit();
        LoginPage.login(username, password);
        Components.clickMoisesLogo();
    });

    afterEach(() => {
        Components.clickUserInfoBtn();
        Components.clickUserInfoSignoutBtn();
        cy.get('#login_button').should('be.visible')
    });

    it('should hide the specific moises collection', { tags: '@e2e' }, () => {
        cy.get('p.info_title__KHXaB').should('contain', 'Moises Collection')
        Components.clickPlaylistActionBtn_1();
        Components.clickExitSetlist();
        Components.clickDeleteCollection();
        // Click the button in case presented in the screen
        cy.get('.modal-keyboard-shortcuts_close__kkQQ8').should('be.visible').click();
        cy.get('#modal_button_close').should('be.visible').click();
        Components.clickMoisesLogo();
        cy.get('p.info_title__KHXaB').should('not.exist');
    });
});