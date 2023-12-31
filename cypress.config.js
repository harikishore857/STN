const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  viewportWidth: 1350,
  viewportHeight: 900,
  videoCompression: 51,
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config)
    },
    baseUrl: 'https://www.stnvideo.com/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
