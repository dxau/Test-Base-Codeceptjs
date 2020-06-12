const pjson = require('../package.json');
const pages = require('./pages')
const { chrome, safari } = require('./browsers')

const config = () => ({
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
            smartWait: 20000,
            fullPageScreenshots: true,
            ...safari,

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

    // Plugins
    plugins: {

        // Browserstack Local
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
            reportDir: "../output",
            reportFilename: "testReport"
        }
    },

})

module.exports = config;