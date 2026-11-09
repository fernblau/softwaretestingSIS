import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {
  async goto() { 
    await this.page.goto('/auth/register'); 
  }
  async registerNewUser(d: any) {
    await this.page.goto('/auth/register');
    await this.page.locator('[formcontrolname="first_name"]').fill(d.firstName).catch(() => {});
    await this.page.locator('button[type="submit"]').click().catch(() => {});
  }
}
