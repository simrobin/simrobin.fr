import { expect, test } from '@playwright/test';

test.describe('Page structure', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders all main sections', async ({ page }) => {
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('header displays name and job title', async ({ page }) => {
    await expect(page.locator('header strong')).toHaveText('Simon Robin');
    await expect(page.locator('header em')).toContainText('Développeur');
  });

  test('header has contact links', async ({ page }) => {
    await expect(page.locator('header a[href^="mailto:"]')).toBeVisible();
    await expect(page.locator('header a[href*="github"]')).toBeVisible();
    await expect(page.locator('header a[href*="twitter"]')).toBeVisible();
  });

  test('about section has bio and skills', async ({ page }) => {
    await expect(page.getByText('À propos de moi')).toBeVisible();
    await expect(page.getByText('HTML, CSS, JavaScript')).toBeVisible();
  });

  test('experiences section renders entries', async ({ page }) => {
    await expect(page.getByText('Expériences')).toBeVisible();
    await expect(page.getByText('MeilleursAgents')).toBeVisible();
  });

  test('education section renders entries', async ({ page }) => {
    await expect(page.getByText('Formations')).toBeVisible();
    await expect(page.getByText('Master MIAGE')).toBeVisible();
  });

  test('footer displays copyright with current year', async ({ page }) => {
    const year = new Date().getFullYear().toString();
    await expect(page.locator('footer')).toContainText(year);
    await expect(page.locator('footer')).toContainText('Simon Robin');
  });
});

test.describe('Dark mode', () => {
  test('toggle switches theme', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('html')).not.toHaveClass(/dark/);

    await page.locator('#theme-toggle').click();
    await expect(page.locator('html')).toHaveClass(/dark/);

    await page.locator('#theme-toggle').click();
    await expect(page.locator('html')).not.toHaveClass(/dark/);
  });

  test('persists theme choice across navigation', async ({ page }) => {
    await page.goto('/');
    await page.locator('#theme-toggle').click();
    await expect(page.locator('html')).toHaveClass(/dark/);

    await page.reload();
    await expect(page.locator('html')).toHaveClass(/dark/);
  });
});

test.describe('Visual regression', () => {
  test('full page matches screenshot', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot('full-page.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.03,
    });
  });

  test('full page dark mode matches screenshot', async ({ page }) => {
    await page.goto('/');
    await page.locator('#theme-toggle').click();
    await expect(page).toHaveScreenshot('full-page-dark.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.03,
    });
  });
});
