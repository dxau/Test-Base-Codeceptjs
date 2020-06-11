const pjson = require('../package.json');
const pages = require('./pages')

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
            logLevel: 'info',
            browser: 'chrome',
            url: 'http://localhost',
            smartWait: 20000,
            fullPageScreenshots: true,
        },
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
        }
    },
    bootstrap: null,
    
    // Reports
    mocha: {
        "reporterOptions": {
            "reportDir": "../output",
            "reportFilename": "testReport"
        }
    },
    
})

module.exports = config;