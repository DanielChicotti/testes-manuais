const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "http://bleachonline.ddns.net/wiki/",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
