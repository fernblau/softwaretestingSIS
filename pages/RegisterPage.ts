import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {
  async goto() { 
    await this.page.goto('/auth/register'); 
  }
  async registerNewUser(d: any) {
  }
}
