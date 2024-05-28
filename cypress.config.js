const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dev4.brokerengine.com.au/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
