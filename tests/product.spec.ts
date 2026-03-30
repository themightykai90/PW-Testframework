import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageobjects/login';
import { Users } from '../data/users';
test.describe('Product Tests', () => {
    test('Add backpack to cart @smoke @ui', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const standardUser = new Users().users[0];

        await page.goto('/');
        await loginPage.enterUsername(standardUser.username);
        await loginPage.enterPassword(standardUser.password);
        await loginPage.clickLoginButton();

        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    });
});
