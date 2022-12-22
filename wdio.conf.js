const path = require("path");

require("dotenv").config({path: path.resolve(getEnv(process.env.NODE_ENV))})

function getEnv(env) {
  switch (env) {
    case "PRP":
      return '.env.prp';
    case "DEV":
      return ".env";
    default:
      return '.env';
  }
}

exports.config = {
  user: 'vladislavzhilins_X6DCEe',
  key: 'n5jT4iZV4pvw7rB7Wgy7',
  runner: 'local',
  specs: ['./test/specs/**/*.js'],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      browserName: process.env.BROWSER,
    },
  ],
  logLevel: 'warn',
  bail: 0,
  baseUrl: 'https://pandorarussia.ru/',
  waitforTimeout: 20000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['browserstack'],
  framework: 'mocha',
  reporters: [
    [
      'allure',
      {
        outputDir: 'allure-results',
      },
    ],
    [
      'junit',
      {
        outputDir: './report',
        outputFileFormat: function (options) {
          return `results-${new Date().getTime()}.xml`;
        },
      },
    ],
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    require: ['@babel/register'],
  },
  beforeTest: function (test, context) {
    browser.maximizeWindow();
  },
  afterTest: function (test, context, { error, result, duration, passed, retries }) {
    if (error) {
      browser.takeScreenshot();
    }
  },
};
