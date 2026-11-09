import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
export class ForgotPasswordPage extends BasePage {
  async goto() { await this.page.goto('/auth/forgot-password'); }
  async requestPasswordReset(email: string) {
    await this.page.locator('[data-test="email"]').fill(email);
    await this.page.locator('[data-test="forgot-password-submit"]').click();
  }
  async getSuccessAlert(): Promise<Locator> { return this.page.locator('.alert-success'); }
  async getErrorAlert(): Promise<Locator> { return this.page.locator('.alert-danger'); }
}
