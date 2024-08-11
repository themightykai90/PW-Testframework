import { test, expect } from '@playwright/test';
import { testcase } from '../runner/TestCase'; 


const Server = "sauce";
const Variant = "UAT";


test.describe('purchase tests', () => {

    test.afterEach(async ({ page }) => {
        let dateTime = new Date()
        await page.screenshot({ path: '../test-results/screenshot.jpg', fullPage: true });


        await page.close();
    });

    test('Successful purchase', async ({ page }) => {

        await new testcase()._testRunner(page, 0, 'Sauce Labs Backpack', Server, Variant);
        await page.close();
    });

}); 