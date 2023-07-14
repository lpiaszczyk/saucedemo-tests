import type { Page, Locator } from '@playwright/test';
import { User } from '../support/loginDetails';

export class LoginPage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(public readonly page: Page) {
    this.usernameInput = this.page.locator('[data-test="username"]');
    this.passwordInput = this.page.locator('[data-test="password"]');
    this.loginButton = this.page.locator('[data-test="login-button"]');
}

  async goto() {
    await this.page.goto('/');
  }

  async login(user: User) {
    await this.usernameInput.fill(user.username);
    await this.passwordInput.fill(user.password);
    await this.loginButton.click();
  }
}