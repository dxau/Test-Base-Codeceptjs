# CodeceptJS test base
## Description
This project is a test base used when doing BDD testing using the Codeceptjs and browserstack tools. It has the ability to be run locally and remotely(on browserstack even via VPN). Test can be run in parrallel on multiple browsers.
Reports are outputed using the mochawesome test reporter


## Tooling
This project contains the test base using the following tools:

- [CodeceptJS](https://codecept.io/)
- [Browserstack Automate](https://www.browserstack.com/automate)
- [Mochawesome](https://github.com/adamgruber/mochawesome#readme)
- [ESLint](https://eslint.org/)


## Default Test Case
The default test is configured to:
```
GIVEN user goes to `dx.com.au`
WHEN user navigates to `\solutions` page via header 
OR user navigates to `\solutions` page via coursel button
THEN solutions content is visable
```
`!NOTE Gherkin is not used in this base.`


## Require Tools
Please ensure you have the following installed

1. Nodejs & npm
2. GNU Make


## Setup
1. Sign up for a browserstack account (I use the free trial) https://www.browserstack.com/
2. create a `.env` file in the root of the project and put in the following content
```
USE_BROWSERSTACK=< 'false' || 'true' >              # Defaults to false
ENABLE_BROWSERSTACK_LOCAL=< 'false' || 'true' >     # Defaults to false
NUMBER_PARALLELS=<NUMBER>                           # Defaults to 1
BROWSERSTACK_USR=<YOUR_BROWSERSTACK_USR>            
BROWSERSTACK_KEY=<YOUR_BROWSERSTACK_KEY>
```
3. run `make setup`
4. You are ready to go

## Design considernations
1. #### Running the suite locally and remotely.
   Running the test suite remotely is great but when issues occur devs/tester can debug issues faster if they run it locally. For codeceptjs we essentially need to have 2 different config files (One for remote/browserstack and another for local). The two files in this case are `./config/config.browserstack.js` and `./config/config.local.js`
2. #### Following common syntax and writing quality code
   Nothing is more annoying then people not following company standards and don't write secure code. ESlint is used to help. It ensures that company standarded coding practises. There are also make targets that upload your code to sonarqube for scanning (Why not?). In this base google javascript standards are implemented
3. #### Structuring code that scales well
   Page object model (POM) is the general pattern that testers follow. Extending POM (kinda, not really) is to split our pages into fragments. Which means you would have different objects for each fragement/section of your webpage. But instead of directly referring to the fragement, the Page Object (The object for the page as a whole) refers the fragements. Essentialy you would have an Page object that represents a page, but you would have seperate fragements which the Page object would refer to. This way you reduce the number of imports you need. You only need to import a Page to be able to access all the fragements within the page. https://codecept.io/pageobjects/#page-fragments
4. #### Merging reports from parrallel runs
   Currently Codeceptjs does not merge the test reports for parrallel runs. This base contains a script that merges the reports for each browser


## Folder Structure
```
| config    # This folder stores the config for codeceptjs, webdriver and browserstack
|---|
    | browsers.js               # The browsers to use and their config
    | config.browserstack.js    # Config for running the test browserstack
    | config.local.js           # Config for running the test locally
    | pages.js                  # The list page objects and their pages for the test to use
    | scripts.js                # The scripts used for bootstrap and teardown codeceptjs
|
| src   # This folder all the Page Objects and test scripts
|---|
    | pages     # Stores all the Page objects     
    |---| home      # This is a page object
        |---| _Page.js      # Page object for the page. It imports the page fragaments for the page. Naming convetion '_Page.js'
            | Coursel.js    # Page fragement for the page
        |
        | _common # Stores all common Page Fragements
    |
    | tests     # Stores all the test scripts
|
| codecept.config.js    # Generally this file is the config file for codecept. In this cause we use it to validate that variables have been set and config is generated
| Makefile              # GNU make command file
| package.json          # NPM 
| package-lock.json     # NPM
| README.md             # Readme
| steps_file.js         # This file stores the common methods that you want to accessable to the 'I' object 

```


## Commands
Make targets
```
    make setup          # Installs all required libaries
    make test.all       # Runs the tests in multiple browsers 
    make test.chrome    # Runs the tests in chrome
    make test.safari    # Runs the tests in safari 
    make test.firefox   # Runs the tests in firefox 
    make lint.stdout    # Outputs to console. Uses ESLint to statically analyze code to ensure standards are met
    make lint.report    # Outputs to json file. Uses ESLint to statically analyze code to ensure standards are met
    make sonar          # Uses sonarqube and eslint to analyse code and check for issues. Need to have sonarqube setup locally  
```

NPM Scripts
```
npm run test:all        # Runs the tests in multiple browsers 
npm run test:chrome     # Runs the tests in chrome
npm run test:safari     # Runs the tests in safari 
npm run test:firefox    # Runs the tests in firefox 
npm run lint:report     # Outputs to json file. Uses ESLint to statically analyze code to ensure standards are met
npm run lint:stdout     # Outputs to json file. Uses ESLint to statically analyze code to ensure standards are met
```

## Author
- Marcus Lau - marcus.wl345@gmail.com
- Patrick Tsang - Patrick.tsang@dx.com.au