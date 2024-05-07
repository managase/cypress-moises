const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  responseTimeout: 20000,
  retries: {
    runMode: 3,
    openMode: 3,
  },
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://studio.moises.ai',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('@bahmutov/cy-grep/src/plugin')(config);
      return config;
    },
  },
});
