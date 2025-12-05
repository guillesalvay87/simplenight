import { defineConfig } from '@playwright/test';
import env from './config/env.test.json';

export default defineConfig({
  use: {
    baseURL: env.baseURL,
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 20000,
    navigationTimeout: 30000
  },
  testDir: './tests',
});