import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageobjects/login';
import { Users } from '../data/users';

test.describe('Login Tests', () => {
    const users = new Users().users;

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test.afterEach(async ({ page }) => {
        await page.screenshot({
            path: `test-results/login-${Date.now()}.png`,
            fullPage: true,
        });
    });

    test('Successful login @smoke @ui', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.enterUsername(users[0].username);
        await loginPage.enterPassword(users[0].password);
        await loginPage.clickLoginButton();
        const inventoryPageTitle = await page.title();
        expect(inventoryPageTitle).toBe('Swag Labs');
    });

    test('Invalid login @ui', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.enterUsername(users[8].username);
        await loginPage.enterPassword(users[8].password);
        await loginPage.clickLoginButton();
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');
    });

    test('Password required @ui', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.enterUsername(users[6].username);
        await loginPage.enterPassword(users[6].password);
        await loginPage.clickLoginButton();
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toBe('Epic sadface: Password is required');
    });

    test('Username required @ui', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.enterUsername(users[7].username);
        await loginPage.enterPassword(users[7].password);
        await loginPage.clickLoginButton();
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toBe('Epic sadface: Username is required');
    });
});