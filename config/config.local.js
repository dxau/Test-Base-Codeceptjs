import pjson from '../package.json';
import {PageObjects} from './pages';
import {multiple} from './browsers';

const config = (numParallels) => ({
  name: pjson.name,
  tests: './src/tests/*.test.js',
  output: './output',

  // Pages
  include: {
    I: './steps_file.js',
    ...PageObjects,
  },

  // Webdriver config
  helpers: {
    WebDriver: {
      coloredLogs: true,
      logLevel: 'debug',
      url: 'http://localhost',
      fullPageScreenshots: true,
      browser: 'chrome',
      windowSize: 'maximize',

      // Waits
      smartWait: 20000,
      waitForTimeout: 10000,
      waitForElement: 5000,
      waitForText: 5000,
    },

    Mochawesome: {
      uniqueScreenshotNames: true,
    },
  },

  // Browsers
  multiple: multiple(numParallels),

  rerun: {
    minSuccess: 1,
    maxReruns: 3,
  },

  // Plugins
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone'],
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
  bootstrapAll: './config/scripts.js',
  teardownAll: './config/scripts.js',

  // Reports
  mocha: {
    reporterOptions: {
      reportDir: './output/reports',
      reportFilename: 'testReport',
    },
  },
});

module.exports = config;
