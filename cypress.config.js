const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  requestTimeout: 3000,
  responseTimeout: 20000,
  retries: {
    runMode: 2,
    openMode: 2,
  },
  e2e: {
    baseUrl: 'https://studio.moises.ai',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('@bahmutov/cy-grep/src/plugin')(config);
      return config;
    },
  },
});
