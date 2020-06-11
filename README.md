# CodeceptJS BDD test base
This project contains the test base using the following tools:

- [CodeceptJS](https://codecept.io/)
- Gherkin
- [Browserstack Automate](https://www.browserstack.com/automate)

The default test is configured to search `Hello` at `google.com` and expect a result with `Adele`

## Require Tools
Please ensure you have the following installed

1. Nodejs & npm
2. GNU Make

## Setup
1. Sign up for a browserstack account (I use the free trial) https://www.browserstack.com/
2. create a `.env` file in the root of the project and put in the following content
```
USE_BROWSERSTACK=< 'false' || 'true' >
ENABLE_BROWSERSTACK_LOCAL=< 'false' || 'true' >
BROWSERSTACK_USR=<YOUR_BROWSERSTACK_USR>
BROWSERSTACK_KEY=<YOUR_BROWSERSTACK_KEY>
```
3. run `make setup`
4. You are ready to go

## Configuration
To adjust the configuration of the test you need to make updates to the codecept.conf.js file

## Commands
The commands will/will not work based on the variable `USE_BROWSERSTACK`
if it set to `true` the targets `test.local` will work
if it set to `false` the targets `test.bs.*` will work 

```
    make setup          # Installs all required libaries
    make test.local     # Runs the tests locally using webdriver
    make test.bs.single # Runs the tests in browserstack using a single browser
    make test.bs.multi  # Runs the tests in browserstack using a multiple browsers 
    make list           # list all the codeceptjs methods you can uses for this base
```

## Author
Marcus Lau - marcus.wl345@gmail.com

Patrick Tsang - Patrick.Tsang@dx.com.au