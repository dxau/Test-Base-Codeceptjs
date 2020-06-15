require('import-export');
require('dotenv').config({path: './.env'});

// Checks that variables are set
if (!('USE_BROWSERSTACK' in process.env)) {
  throw new Error('Missing environment variable "USE_BROWSERSTACK"');
}
if (process.env.USE_BROWSERSTACK.toLowerCase() === 'true') {
  if (!('BROWSERSTACK_USR' in process.env)) {
    throw new Error('Missing environment variable "BROWSERSTACK_USR"');
  }
  if (!('BROWSERSTACK_KEY' in process.env)) {
    throw new Error('Missing environment variable "BROWSERSTACK_KEY"');
  }
}

// Generate the config for setting
let config;
let enableBrowserstackLocal = false;
let numParrallels = 1;

if ('NUMBER_PARALLELS' in process.env) {
  numParrallels = Number(process.env.NUMBER_PARALLELS);
}
// Browserstack config
if (process.env.USE_BROWSERSTACK.toLowerCase() === 'true') {
  // Get the config file for local browserstack testing
  if (process.env.ENABLE_BROWSERSTACK_LOCAL.toLowerCase() === 'true') {
    enableBrowserstackLocal = true;
  }

  // Get config
  const genConfig = require('./config/config.browserstack.js');
  config = genConfig(
      process.env.BROWSERSTACK_USR,
      process.env.BROWSERSTACK_KEY,
      enableBrowserstackLocal,
      numParrallels,
  );

// local config
} else {
  const genConfig = require('./config/config.local.js');
  config = genConfig(numParrallels);
}

// Set conceptjs config
exports.config = config;
