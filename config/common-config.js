var pjson = require('../package.json');

const common = {
    tests: './src/tests/*.test.js',
    output: '../output',
    include: {
        I: './steps_file.js'
    },
    "mocha": {
        "reporterOptions": {
            "reportDir": "../output",
            "reportFilename": "testReport"
        }
    },
    require: ["ts-node/register"],
    name: pjson.project,
}

module.exports = common