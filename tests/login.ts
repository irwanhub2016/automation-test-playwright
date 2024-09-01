import { Page, expect } from '@playwright/test';

export async function loginAndVerify(page: Page): Promise<void> {
  // Navigate to the website
  await page.goto('https://www.saucedemo.com/');

  // Perform login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Verify successful login
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
}
