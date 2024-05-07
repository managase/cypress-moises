# cypress-moises
Sample project to demonstrate end-to-end (e2e) tests written with Cypress to test the Moises (https://studio.moises.ai/) running on GitHub Actions.

## Technical Choices
I decided to use Cypress due to its well-suited for end-to-end testing of web applications. It can simulate user interactions across multiple pages and test the application's behavior as a whole.

The tests scripts was created based in a architeture by modules and using pageobjects to maintain the specific components of the funcionality and their actions
- [signup.cy.js] Tests related to the signup functionality
- [login.cy.js] Tests related to the login functionality
- [tracks.cy.js] Tests related to add, delete tracks
- [collection.cy.js] Tests related to the collection manage

Pageobjects were created in `support/page_objects` folder

## Setup Instructions
## Pre-requirements

To clone and run this project, you will need:

- [git](https://git-scm.com/downloads) (I've used version `2.44.0.windows.1`)
- [Node.js](https://nodejs.org/en/) (I've used version `v20.12.2`)
- npm (I've used version `10.5.0`)

**Note:** When installing Node.js, npm is automatically installed. 🚀

## Installation

To install the dev dependencies, run `npm install` (or `npm i` for short.)

## devDependencies
- [@bahmutov/cy-grep] `1.9.17` (it allows to work with tags to select which tests need it to be run on e2e tests)
- [@faker-js/faker] `8.4.1` (it allows to create random data to create a random email address random@qatest.com and password)
- [@cypress] `13.8.1`

## Configuring the environment variables

- [cypress.config.js] configuration of defaultCommandTimeout, requestTimeout, responseTimeout, retries, baseUrl, plugins
- [cypress.env.json] configuration file to store data to create a new account and run the e2e tests 

**Note:** The `login.json` file is not tracked by git since it's listed in the `.gitignore` file.

## Running the tests

In this project, you can run tests in interactive and headless modes.

### Interactive mode
- Run `npx cypress open` to run individually signup tests.

### Headless mode
- Run `npm run tests-signup` to run individually signup tests.
- Run `npm run tests-login` to run individually login tests.
- Run `npm run tests-tracks` to run individually tests to manage tracks.
- Run `npm run tests-collection` to run individually collection tests.
- Run `npm run execute-e2e-tests` to run e2e tests categorized by tag `@e2e`.

### Test Retries

The automatic retry mechanism for failed tests were configured in the `cypress.config.js` with a predefined number of retry attempts before marking a test as failed (runMode: 2, openMode: 2). During the test execution, it was noticed that some tests were successfully executed on the third attempt.

### Known Issues and Limitations

- The tests was developed using the latest cypress version `13.8.1`. So, I have found some cypress issues related to infinite loop
https://github.com/cypress-io/cypress/issues/27501
https://github.com/cypress-io/cypress/issues/25891
https://github.com/cypress-io/cypress/issues/28285

I verified that the issue was related to accessing the cypress.env.json file at the root of the project using the cy.writeFile command. I changed the logic to store the username and password in the login.json file in the fixtures directory. Loop issue was fixed.

- I found some issues related to user session management during test creation. For instance, during test execution, the user was not authenticated in the application but was logged in with a session from a previously user. To address this, a strategy used was executing a log off during tests to prevent application caching and to utilize a configuration file for storing the username and password `cypress/fixtures/login.json`.

- During the execution the test to delete the collection using cypress in Open Mode (npx cypress open), another browser instance is open help.moises.ai - Confirme que você é humano realizando a ação abaixo.
