var pjson = require('../package.json');

const common = {
    tests: './src/tests/*.test.js',
    output: './output',
    include: {
        I: './steps_file.js'
    },
    mocha: {
        // "reporterOptions": {
        //     "reportDir": "../output",
        //     "reportFilename": "testReport"
        // }
    },
    name: pjson.name,

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
}

module.exports = common