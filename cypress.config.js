const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com/v1/',
    viewportWidth: 1920,
    viewportHeigth : 1080
  },
});
