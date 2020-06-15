import pjson from '../package.json';
import {PageObjects} from './pages';
import {multiple} from './browsers';

const config = (user, key, useLocal, numParallels) => ({
  name: pjson.name,
  tests: './src/tests/*.test.js',
  output: './output',

  // Pages
  include: {
    I: './steps_file.js',
    ...PageObjects,
  },

  // Browsers
  multiple: multiple(numParallels),

  // Webdriver config
  helpers: {
    WebDriver: {
      host: 'hub.browserstack.com',
      user: user,
      key: key,
      coloredLogs: true,
      logLevel: 'info',
      browser: 'chrome',
      url: 'http://localhost',
      fullPageScreenshots: true,
      windowSize: 'maximize',
      desiredCapabilities: {
        'browserstack.local': useLocal,
        'build': `${pjson.name} ${useLocal ? 'Local' : 'Remote'}`,
        'project': pjson.name,
        'name': `${Date.now()}`,
      },

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

  rerun: {
    minSuccess: 1,
    maxReruns: 3,
  },

  // Plugins
  plugins: {

    // Browserstack Local
    wdio: {
      enabled: useLocal,
      services: ['browserstack'],
      user: user,
      key: key,
      forcedStop: true,
      browserstackLocal: useLocal,
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
