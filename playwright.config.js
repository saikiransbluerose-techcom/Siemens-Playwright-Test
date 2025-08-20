// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  // Discover tests anywhere under the repo (projects override testDir)
  testDir: '.',
  testIgnore: [/node_modules/, /\.git/],

  // ⏱ Global per-test timeout (slowMo + long flows need more than 30s)
  timeout: 1200_000,

  expect: { timeout: 5_000 },
  retries: 0,                 // optional: retry once on flake
  // workers: 1,              // uncomment if your Pega env dislikes parallel runs

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'always' }],
  ],

  use: {
    headless: false,
    // ✅ slowMo must be under launchOptions (remove use.slowMo)
   // ✅ All launch-related options go inside launchOptions
  launchOptions: {
    slowMo: 800,
    args: [
      '--disable-extensions',           // Prevents adblockers from blocking JS
      '--disable-popup-blocking',
      '--no-sandbox',
      '--disable-web-security',         // Help with CORS/mixed content
      '--allow-running-insecure-content', // Allow HTTP resources on HTTPS
      '--disable-features=BlockInsecurePrivateNetworkRequests' // 👈 Critical for Pega Labs
    ],
  },


    actionTimeout: 20_000,          // per-action budget
    navigationTimeout: 30_000,
    testIdAttribute: 'data-test-id',// Pega uses data-test-id
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    // ===== IntelligentHealthCare =====
    {
      name: 'IntelligentHealthCare - Chromium',
      testDir: './IntelligentHealthCare/tests',
      use: { browserName: 'chromium' },
      outputDir: 'test-results/IntelligentHealthCare/chromium',
    },
    {
      name: 'IntelligentHealthCare - Firefox',
      testDir: './IntelligentHealthCare/tests',
      use: { browserName: 'firefox' },
      outputDir: 'test-results/IntelligentHealthCare/firefox',
    },
    {
      name: 'IntelligentHealthCare - WebKit',
      testDir: './IntelligentHealthCare/tests',
      use: { browserName: 'webkit' },
      outputDir: 'test-results/IntelligentHealthCare/webkit',
    },

    // ===== LoanManagement =====
    {
      name: 'LoanManagement - Chromium',
      testDir: './LoanManagement/tests',
      use: { browserName: 'chromium' },
      outputDir: 'test-results/LoanManagement/chromium',
    },
    {
      name: 'LoanManagement - Firefox',
      testDir: './LoanManagement/tests',
      use: { browserName: 'firefox' },
      outputDir: 'test-results/LoanManagement/firefox',
    },
    {
      name: 'LoanManagement - WebKit',
      testDir: './LoanManagement/tests',
      use: { browserName: 'webkit' },
      outputDir: 'test-results/LoanManagement/webkit',
    },

    // ===== LoanManagement =====
    {
      name: 'SampleApplication - edge',
      testDir: './SampleApplication/tests',
      use: { browserName: 'chromium' },
      outputDir: 'test-results/SampleApplication/edge',
    },
  ],
});
