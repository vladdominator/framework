exports.config = {
  user: 'bsuser_jKv2lu',
  key: '9Sovy8pwQQisntTfe9PN',
  runner: 'local',
  specs: ['./test/specs/**/*.js'],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      browserName: 'chrome',
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
