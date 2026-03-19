import { defineConfig, devices } from "@playwright/test";
import * as os from "os";

export default defineConfig({
  testDir: "./tests",
  globalSetup: './base/globalSetUp',
  testMatch: ['*.spec.ts'],
  timeout: 9000,
  fullyParallel: true,
  retries: 0,
  workers: 1,
  reporter: [
        ["html", { open: 'never' }],
      ],
  use: {
    trace: "on-first-retry",
    video: "retain-on-failure",
    screenshot: "only-on-failure",
    actionTimeout: 5000,
    headless: true,
  },
  
  projects: [
    {
      name: "API",
      testDir: "tests/API",
    },
  ],
});
