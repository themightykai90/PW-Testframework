import { Page } from 'playwright';

export class LoginPage {
    private page: Page;

    // Element selectors
    private usernameInput = '#user-name';
    private passwordInput = '#password';
    private loginButton = '#login-button';
    private errorMessage = '[data-test="error"]';

    constructor(page: Page) {
        this.page = page;
    }

    async enterUsername(username: string) {
        await this.page.fill(this.usernameInput, username);
    }

    async enterPassword(password: string) {
        await this.page.fill(this.passwordInput, password);
    }

    async clickLoginButton() {
        await this.page.click(this.loginButton);
    }

    async getErrorMessage() {
        return await this.page.textContent(this.errorMessage);
    }
}