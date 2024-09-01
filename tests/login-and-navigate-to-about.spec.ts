import { test, expect } from '@playwright/test';
import { loginAndVerify } from './login';

test('Login, navigate to About page, and verify', { tag: '@access-about' }, async ({ page }) => {
    await loginAndVerify(page);

    // Click hamburger menu
    await page.click('#react-burger-menu-btn');

    // Wait for menu to open and click About link
    await page.click('#about_sidebar_link');

    // Verify navigation to About page
    await expect(page).toHaveURL('https://saucelabs.com/');
});