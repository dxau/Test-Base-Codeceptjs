const pjson = require('../package.json');
const pages = require('./pages')
const { chrome, firefox, safari } = require('./browsers')

const config = (user, key, useLocal, numParallels) => ({
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
                "browserstack.local": useLocal,
                build: `${pjson.name} ${useLocal ? "Local" : "Remote"}`,
                project: pjson.name,
                name: `${Date.now()}`,
            },

            /// Waits
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
            enabled: useLocal,
            services: ['browserstack'],
            user: user,
            key: key,
            forcedStop: true,
            browserstackLocal: useLocal,
        },
        screenshotOnFail: {
            enabled: true
        }
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