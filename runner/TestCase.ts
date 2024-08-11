import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pageobjects/login';
import { EnvSetup } from '../data/setup';
import { Users } from '../data/users'; // Import the 'Users' class

export class testcase {

async _testRunner(page: Page, user: number, product, server: string, variant: string) {
    test.setTimeout(10000);

    await page.goto(await new EnvSetup()._envsetup(server, variant)); //Get the URL from the EnvSetup class

    await page.waitForLoadState('domcontentloaded'); //wait for all dom content to load before continuing

    await new LoginPage(page).enterUsername(new Users().users[user].username); // Use 'Users' instead of 'user'
    await new LoginPage(page).enterPassword(new Users().users[user].password); // Assuming 'enterPassword' is the correct method name
    await new LoginPage(page).clickLoginButton();
    

}


}