const common = require('./common-config.js')

const config = {
    ...common,
    helpers: {
        WebDriver: {
          url: 'http://localhost',
          browser: 'chrome'
        }
    },
}

module.exports = config;