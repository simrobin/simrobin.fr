import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'pnpm build && pnpm preview --port 4322',
    port: 4322,
    reuseExistingServer: !process.env.CI,
  },
  testDir: 'e2e',
  snapshotPathTemplate:
    '{snapshotDir}/{testFileDir}/{testFileName}-snapshots/{arg}-{projectName}{ext}',
  use: {
    baseURL: 'http://localhost:4322',
  },
  projects: [{ name: 'chromium', use: { browserName: 'chromium' } }],
});
