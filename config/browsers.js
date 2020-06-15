export const multiple = (numParallels) => ({
  chrome: {
    browsers: [browsers.chrome],
    chunks: numParallels,
  },
  firefox: {
    browsers: [browsers.firefox],
    chunks: numParallels,
  },
  safari: {
    browsers: [browsers.safari],
    chunks: numParallels,
  },
});

const browsers = {
  chrome: {
    browser: 'chrome',
    capabilities: {
      chromeOptions: {
        args: ['--incognito', '--no-sandbox'],
      },
    },
  },
  firefox: {
    browser: 'firefox',
    capabilities: {
      'moz:firefoxOptions': {
        prefs: {
          'dom.ipc.processCountbrowser.privatebrowsing.autostart': true,
        },
      },
    },
  },
  safari: {
    browser: 'safari',
    desiredCapabilities: {
      browserVersion: '13.1',
    },
  },
};
