// Configs
require('dotenv').config({ path: './.env' })

// Checks that variables are set
if (!('USE_BROWSERSTACK' in process.env)) throw new Error("Environment variable 'USE_BROWSERSTACK' must be set to 'true' or 'false'. You can set the variable in the '.env' file")
if (process.env.USE_BROWSERSTACK.toLowerCase() === "true"){
  if (!('BROWSERSTACK_USR' in process.env)) throw new Error("Environment variable 'BROWSERSTACK_USR' must be set when 'USE_BROWSERSTACK' is set to 'true'.\n You can set the variable in the '.env' file")
  if (!('BROWSERSTACK_KEY' in process.env)) throw new Error("Environment variable 'BROWSERSTACK_KEY' must be set when 'USE_BROWSERSTACK' is set to 'true'.\n You can set the variable in the '.env' file")
}

// Generate the config for setting
let config
let enableBrowserstackLocal = false
let numParrallels = 1

if ('NUMBER_PARALLELS' in process.env) numParrallels = Number(process.env.NUMBER_PARALLELS);

// Browserstack config
if (process.env.USE_BROWSERSTACK.toLowerCase() === "true") {
  // Get the config file for local browserstack testing
  if (process.env.ENABLE_BROWSERSTACK_LOCAL.toLowerCase() === "true") enableBrowserstackLocal = true

  // Get config
  const genConfig = require('./config/config.browserstack.js')
  config = genConfig(process.env.BROWSERSTACK_USR, process.env.BROWSERSTACK_KEY, ENABLE_BROWSERSTACK_LOCAL, numParrallels)

// local config
} else {
  const genConfig = require('./config/config.local.js')
  config = genConfig(numParrallels)
}

// Set conceptjs config
exports.config = config