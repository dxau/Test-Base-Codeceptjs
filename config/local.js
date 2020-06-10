const common = require('./common-config.js')
const browserstack = require('browserstack-local');
var pjson = require('../package.json');

const config = (user, key) => ({
    ...common,
    WebDriver: {
        host: 'hub.browserstack.com',
        user: user,
        key: key,
        browser: 'chrome',
        coloredLogs: true,
        logLevel: 'info',
    },

    runner: 'local',
    specs: [
        './src/features/**/*.feature'
    ],
    capabilities: [
        {
            browser: 'chrome',
            build: 'build',
            project: pjson.project,
            name: "name",
            'browserstack.local': true
        }
    ],
    plugins: {
        screenshotOnFail: {
            enabled: false
        },
    },
    
    bootstrap: (done) => {
        return new Promise(function(resolve, reject){
            exports.bs_local = new browserstack.Local();
            exports.bs_local.start(
                {
                    'key': key,
                    'localIdentifier': `${pjson.project}_${Date.now()}`
                }, 
                function(error) {
                    if (error) {
                        done()
                        return reject();
                    } else {
                        console.log('Connected. Now testing...');
                        done()
                        resolve();
                    }
                }
            );
        });
    },
    teardown: (done) => {
        exports.bs_local.stop(() => {
            console.log(('Closing local browserstack client'))
            done()
        })
    }
})

module.exports = config;