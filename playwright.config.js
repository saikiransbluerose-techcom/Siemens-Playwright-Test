// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  // Search from repo root
  testDir: '.',
  testIgnore: [/node_modules/, /\.git/],

  // Global per-test timeout
  timeout: 1_200_000,

  expect: { timeout: 5_000 },
  retries: 0,
  // workers: 1, // uncomment if your env dislikes parallel runs

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],

  use: {
    headless: false,
    actionTimeout: 20_000,
    navigationTimeout: 30_000,
    testIdAttribute: 'data-test-id',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    launchOptions: {
      slowMo: 800,
      args: [
        '--disable-extensions',
        '--disable-popup-blocking',
        '--no-sandbox',
        '--disable-web-security',
        '--allow-running-insecure-content',
        '--disable-features=BlockInsecurePrivateNetworkRequests'
      ],
    },
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

    // ===== SiemensApplication (ADDED) =====
    {
      name: 'SiemensApplication - Chromium',
      testDir: './SiemensApplication/tests',
      use: { browserName: 'chromium' },
      outputDir: 'test-results/SiemensApplication/chromium',
    },
    {
      name: 'SiemensApplication - Firefox',
      testDir: './SiemensApplication/tests',
      use: { browserName: 'firefox' },
      outputDir: 'test-results/SiemensApplication/firefox',
    },
    {
      name: 'SiemensApplication - WebKit',
      testDir: './SiemensApplication/tests',
      use: { browserName: 'webkit' },
      outputDir: 'test-results/SiemensApplication/webkit',
    },

    // ===== SampleApplication (Edge channel example) =====
    {
      name: 'SampleApplication - Edge',
      testDir: './SampleApplication/tests',
      use: { channel: 'msedge' }, // requires Edge installed
      outputDir: 'test-results/SampleApplication/edge',
    },
  ],
});
