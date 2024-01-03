const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1600,
    viewportHeight: 900,
    projectId: "bpz1cd",
    experimentalRunAllSpecs: true,
    baseUrl: 'https://automationexercise.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
