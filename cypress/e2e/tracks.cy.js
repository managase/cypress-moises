// cypress/e2e/separateTracks.cy.js
import { faker } from '@faker-js/faker';

const SignupPage = require('../support/page_objects/signupPage');
const LoginPage = require('../support/page_objects/loginPage');
const TracksPage = require('../support/page_objects/tracksPage');
const Components = require('../support/page_objects/components');

describe('Tracks Test', () => {

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

    it('should upload invalid song format', { tags: '@e2e' }, () => {
        TracksPage.clickAddButton();
        TracksPage.clickUploadButton();
        TracksPage.addTracks('cypress/fixtures/TESTE FAQ.mp6');
        Components.clickMoisesLogo();
        TracksPage.validateInvalidFileError('Tipo de arquivo inválido');
    });

    it('should upload the song', { tags: '@e2e' }, () => {
        TracksPage.clickAddButton();
        TracksPage.clickUploadButton();
        cy.fixture('tracks.json').then((tracksData) => {
            const tracks = tracksData.name + '.' + tracksData.format;
            TracksPage.addTracks('cypress/fixtures/' + tracks);
            TracksPage.clickNextButton();
            TracksPage.clickSeparationType();
            TracksPage.clickSubmitButton();
            Components.clickMoisesLogo();
            TracksPage.validateUploadSong(tracksData.name);
        });
    });

    it('should delete the song', { tags: '@e2e' }, () => {
        // Add the track song
        TracksPage.clickAddButton();
        TracksPage.clickUploadButton();
        cy.fixture('tracks.json').then((tracksData) => {
            const tracks = tracksData.name + '.' + tracksData.format;
            TracksPage.addTracks('cypress/fixtures/' + tracks);
            TracksPage.clickNextButton();
            TracksPage.clickSeparationType();
            TracksPage.clickSubmitButton();
            Components.clickMoisesLogo();
            TracksPage.validateUploadSong(tracksData.name);

            // Delete the track song
            TracksPage.clickTaskActionBtn_1();
            TracksPage.clickDeleteLibrary();
            TracksPage.clickDeleteSong();
            Components.clickMoisesLogo();
            TracksPage.validateDeleteSong();
        });
    });

    it('should validate the input value of the request after the track separation process', { tags: '@e2e' }, () => {
        TracksPage.clickAddButton();
        TracksPage.clickUploadButton();
        cy.fixture('tracks.json').then((tracksData) => {
            const tracks = tracksData.name + '.' + tracksData.format;
            TracksPage.addTracks('cypress/fixtures/' + tracks);
            TracksPage.clickNextButton();
            TracksPage.clickSeparationType();
            let graphqlRequests = [];
            cy.intercept('POST', 'https://api.moises.ai/graphql', (req) => {
                if (req.body.query.includes("createTask")) {
                    graphqlRequests.push(req);
                }
            }).as('graphqlRequests');
            TracksPage.clickSubmitButton();
            cy.wait('@graphqlRequests').then(() => {
                if (graphqlRequests && graphqlRequests.length > 0) {
                    const body = graphqlRequests[0].body;

                    const inputValue = body.query.match(/input:\s*"([^"]+)"/)[1];
                    expect(inputValue).to.equal(tracks);
                } else {
                    console.error("No GraphQL request captured");
                }
            });
            Components.clickMoisesLogo();
            TracksPage.validateUploadSong(tracksData.name); 
        });
    });
});