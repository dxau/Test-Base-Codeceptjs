const pjson = require('../package.json');
const pages = require('./pages')
const { chrome, safari, firefox } = require('./browsers')

const config = (numParallels) => ({
    name: pjson.name,
    tests: './src/tests/*.test.js',
    output: './output',

    // Pages
    include: {
        I: './steps_file.js',
        ...pages
    },

    // Webdriver config
    helpers: {
        WebDriver: {
            coloredLogs: true,
            logLevel: 'debug',
            url: 'http://localhost',
            fullPageScreenshots: true,
            ...chrome,
            windowSize: 'maximize',
            // Waits
            smartWait: 20000,
            waitForTimeout: 10000,
            waitForElement: 5000,
            waitForText: 5000,
        },

        Mochawesome: {
            uniqueScreenshotNames: true
        }
    },

    // Browsers
    multiple: {
        chrome: {
            outputName: 'local-chrome',
            browsers: [chrome],
            chunks: numParallels,
        },
        firefox: {
            outputName: 'local-firefox',
            browsers: [firefox],
            chunks: numParallels,
        },
        safari: {
            outputName: 'remote-safari',
            browsers: [safari],
            chunks: numParallels,
        }
    },

    // Plugins
    plugins: {
        wdio: {
            enabled: true,
            services: ['selenium-standalone'],
        },
        screenshotOnFail: {
            enabled: true
        },
    },
    bootstrap: null,

    // Reports
    mocha: {
        reporterOptions: {
            reportDir: "./output/reports",
            reportFilename: "testReport"
        }
    },

})

module.exports = config;