module.exports = {
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
