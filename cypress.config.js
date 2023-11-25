const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000, // Set the global timeout here
  reporter: 'cypress-mochawesome-reporter', // generates reports to "...\cypress_example_project\cypress\reports\html\"
  e2e: {
    baseUrl: 'https://www.bing.com/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  watchForFileChanges: false // prevents auto-execution of tests on changes
});
