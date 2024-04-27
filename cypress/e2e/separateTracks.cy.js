// cypress/e2e/separateTracks.cy.js

const LoginPage = require('../support/page_objects/loginPage');
const SeparateTracksPage = require('../support/page_objects/separateTracksPage');
const Components = require('../support/page_objects/components');

describe('Separate Tracks Test', () => {

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

    it('should upload invalid song format', { tags: '@e2e' }, () => {
        SeparateTracksPage.clickAddButton();
        SeparateTracksPage.clickUploadButton();
        SeparateTracksPage.addTracks('cypress/fixtures/TESTE FAQ.mp6');
        Components.clickMoisesLogo();
        cy.get('.select-local-file_container___iOmG')
            .should('be.visible')
            .contains('Tipo de arquivo inválido');
    });

    it('should upload the song', { tags: '@e2e' }, () => {
        SeparateTracksPage.clickAddButton();
        SeparateTracksPage.clickUploadButton();
        SeparateTracksPage.addTracks('cypress/fixtures/TESTE FAQ.mp3');
        SeparateTracksPage.clickNextButton();
        SeparateTracksPage.clickSeparationType();
        SeparateTracksPage.clickSubmitButton();
        Components.clickMoisesLogo();
        cy.get('[title="TESTE FAQ"]')
            .should('be.visible')
            .contains('TESTE FAQ');
    });

    it('should delete the song', { tags: '@e2e' }, () => {
        SeparateTracksPage.clickTaskActionBtn_1();
        SeparateTracksPage.clickDeleteLibrary();
        SeparateTracksPage.clickDeleteSong();
        Components.clickMoisesLogo();
        cy.get('[title="TESTE FAQ"]').should('not.exist');
    });

});