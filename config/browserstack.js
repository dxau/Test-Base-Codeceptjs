const pjson = require('../package.json');
const pages = require('./pages')

const config = (user, key, useLocal) => ({
    name: pjson.name,
    tests: './src/tests/*.test.js',
    output: './output',
    
    // Pages
    include: {
        I: './steps_file.js',
        ...pages
    },

    // Browsers
    multiple: {
        all : {
            browsers: ["chrome", "firefox", "safari"]
        },
        chrome: {
            browsers: ["chrome"]
        },
        firefox: {
            browsers: ["firefox"]
        },
        safari: {
            browsers: ["safari"]
        }
    },

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
            smartWait: 20000,
            fullPageScreenshots: true,
        },
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
            capabilities: {
                "browserstack.local": useLocal,
                build: `${pjson.name} Local`,
                project: pjson.name,
                name: "name",
            }
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