// Configs
require('dotenv').config({ path: './.env' })

// Get the config file for local or browserstack testing
let CONFIG_FILE = ''
if(process.env.LOCAL.toLowerCase() === "true"){
  CONFIG_FILE = './config/local.js'
} else {
  CONFIG_FILE = './config/browserstack.js'
}

const genConfig = require(CONFIG_FILE)
exports.config = genConfig(process.env.BROWSERSTACK_USER, process.env.BROWSERSTACK_KEY)