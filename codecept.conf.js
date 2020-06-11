// Configs
require('dotenv').config({ path: './.env' })

// Checks that variables are set
if (!('USE_BROWSERSTACK' in process.env)) throw new Error("Environment variable 'USE_BROWSERSTACK' must be set to 'true' or 'false'. You can set the variable in the '.env' file")
if (process.env.USE_BROWSERSTACK.toLowerCase() === "true"){
  if (!('BROWSERSTACK_USR' in process.env)) throw new Error("Environment variable 'BROWSERSTACK_USR' must be set when 'USE_BROWSERSTACK' is set to 'true'.\n You can set the variable in the '.env' file")
  if (!('BROWSERSTACK_KEY' in process.env)) throw new Error("Environment variable 'BROWSERSTACK_KEY' must be set when 'USE_BROWSERSTACK' is set to 'true'.\n You can set the variable in the '.env' file")
  if (!('ENABLE_BROWSERSTACK_LOCAL' in process.env)) throw new Error("Environment variable 'ENABLE_BROWSERSTACK_LOCAL' must be set to 'true' or 'false'  when 'USE_BROWSERSTACK' is set to 'true'.\n. You can set the variable in the '.env' file")
}

// Generate the config for setting
let USE_BROWSERSTACK, config, user, key

// Browserstack config
if (process.env.USE_BROWSERSTACK.toLowerCase() === "true") {
  USE_BROWSERSTACK = true
  user = process.env.BROWSERSTACK_USR
  key = process.env.BROWSERSTACK_KEY
  // Get the config file for local browserstack testing
  let ENABLE_BROWSERSTACK_LOCAL
  if (process.env.ENABLE_BROWSERSTACK_LOCAL.toLowerCase() === "true") {
    ENABLE_BROWSERSTACK_LOCAL = true
  } else {
    ENABLE_BROWSERSTACK_LOCAL = false
  }

  // Get config
  const genConfig = require('./config/browserstack.js')
  config = genConfig(process.env.BROWSERSTACK_USR, process.env.BROWSERSTACK_KEY, ENABLE_BROWSERSTACK_LOCAL)

// local config
} else {
  USE_BROWSERSTACK = false
  const genConfig = require('./config/local.js')
  config = genConfig()
}

// Set conceptjs config
exports.config = config