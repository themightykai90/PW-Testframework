import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageobjects/login';
import { Users } from '../data/users';
import { testcase } from '../runner/TestCase';

test.describe('Login Tests', () => {
    let page: any;
    let loginPage: LoginPage;

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        loginPage = new LoginPage(page);
        await page.goto('https://www.saucedemo.com/');
    });

    test.afterEach(async ({ page }) => {
        await page.screenshot({ path: '../test-results/screenshot.jpg', fullPage: true });
        await page.close();
    });

    test('Successful login', async () => {
        await loginPage.enterUsername(new Users().users[0].username);
        await loginPage.enterPassword(new Users().users[0].password);
        await loginPage.clickLoginButton();
        const inventoryPageTitle = await page.title();
        expect(inventoryPageTitle).toBe('Swag Labs');
    });

    test('Invalid login', async () => {
        await loginPage.enterUsername(new Users().users[8].username);
        await loginPage.enterPassword(new Users().users[8].password);
        await loginPage.clickLoginButton();
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');
    });

    test('Password Username', async () => {
        await loginPage.enterUsername(new Users().users[6].username);
        await loginPage.enterPassword(new Users().users[6].password);
        await loginPage.clickLoginButton();
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toBe('Epic sadface: Password is required');
    });

    test('User Required', async () => {
        console.log(await loginPage.enterUsername(new Users().users[7].username));        
        await loginPage.enterPassword(new Users().users[7].password);
        await loginPage.clickLoginButton();
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toBe('Epic sadface: Username is required');
    });
});