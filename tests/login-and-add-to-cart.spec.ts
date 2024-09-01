import { test, expect } from '@playwright/test';
import { loginAndVerify } from './login';

test('Login, add item to cart, and verify', { tag: '@add-cart' }, async ({ page }) => {
    await loginAndVerify(page);

    // Add first item to cart
    await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');

    // Verify item added to cart
    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');

    // Navigate to cart and verify item
    await page.click('.shopping_cart_link');
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
});