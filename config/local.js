const common = require('./config.common.js')
var pjson = require('../package.json');

const config = (user, key) => ({
    ...common,
    helpers: {
        WebDriver: {
            host: 'hub.browserstack.com',
            user: user,
            key: key,
            coloredLogs: true,
            logLevel: 'info',
            browser: 'chrome',
            url: 'http://localhost',
            capabilities: {
                build: `${pjson.name} Local`,
                project: pjson.name,
                name: "name",
            },
        },
    },

    plugins: {
        wdio: {
            enabled: true,
            services: ['browserstack'],
            user: user,
            key: key,
            forcedStop: true,
            browserstackLocal: true,
            capabilities: {
                "browserstack.local": true,
                "browserstack.localIdentifier": "test"
            }
        },
        screenshotOnFail: {
            enabled: true
        }
    },
    bootstrap: null
})

module.exports = config;