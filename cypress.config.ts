import { defineConfig } from 'cypress';

const { addCompareScreenshotPlugin } = require('cypress-odiff');

export default defineConfig({
  trashAssetsBeforeRuns: false, // needed to avoid deleting expeted screenshot
  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      addCompareScreenshotPlugin(on, { ...config, ...{ customSnapshotsDir: 'cypress/snapshots' } });
      // implement node event listeners here
    },
  },
});
