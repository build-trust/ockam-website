/* eslint-disable no-param-reassign */
import { defineConfig } from 'cypress';

const { addCompareScreenshotPlugin } = require('cypress-odiff');

export default defineConfig({
  trashAssetsBeforeRuns: false, // needed to avoid deleting expeted screenshot
  e2e: {
    blockHosts: [
      // 'cdn.segment.com',
      // 'api.segment.io',
      'px.ads.linkedin.com',
      'www.redditstatic.com',
      'pixel-config.reddit.com',
      'c.6sc.co',
      'ipv6.6sc.co',
      'epsilon.6sense.com',
      '*.auth0.com',
      //   '*google.com',
      //   '*reddit*.com',
      //   '*segment.io',
      //   '*segment.com',
      //   '*.6sc.co',
      //   '*clearbit*.com',
      //   '*redditstatic.com',
    ],
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        const maxWidth = 7680;
        const maxHeight = 4320;
        if (browser.name === 'chrome' && browser.isHeadless) {
          launchOptions.args.push(`--window-size=${maxWidth},${maxHeight}`);
          // force screen to be non-retina
          launchOptions.args.push('--force-device-scale-factor=1');
        }

        if (browser.name === 'electron' && browser.isHeadless) {
          launchOptions.preferences.width = maxWidth;
          launchOptions.preferences.height = maxHeight;
        }

        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--force-color-profile=srgb');
          launchOptions.args.push('--disable-low-res-tiling');
          launchOptions.args.push('--disable-smooth-scrolling');
        }
        return launchOptions;
      });
      addCompareScreenshotPlugin(on, { ...config, ...{ customSnapshotsDir: 'cypress/snapshots' } });
      // implement node event listeners here
    },
  },
});
