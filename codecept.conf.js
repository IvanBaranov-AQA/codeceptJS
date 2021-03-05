//const { setHeadlessWhen } = require('@codeceptjs/configure');
//import { setHeadlessWhen} from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
//setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'tests/API/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      restart: true,
      keepBrowserState: false,
      keepCookies: false,
      url: "http://localhost",
      waitForNavigation: [
        "networkidle2",
        "domcontentloaded"
      ],
      waitForTimeout: 25000,
      waitForAction: 300,
      show: false,
      chrome: {
        args: [
          "--disable-dev-shm-usage",
          "--no-sandbox",
          "--start-maximized"
        ],
        defaultViewport: {
          width: 1920,
          height: 1080
        }
      },
      disableScreenshots: false
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/homePage.js',
    loginPage: './pages/loginPage.js',
    mailHomePage: './pages/mailHomePage.js',
    locationPage: './pages/locationPage.js',
    langPage: './pages/langPage.js',
    APIYandex: './helpers/APIYandex.js',
    Basket: './helpers/Basket.js',
    sleep: './helpers/sleep.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'CodeceptJS',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: false
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {},
    puppeteerCoverage: {
    enabled: true
  }
  }
};