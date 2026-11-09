import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {
  async goto() { 
    await this.page.goto('/auth/register'); 
  }
  async registerNewUser(d: any) {
    await this.page.locator('#first_name').fill(d.firstName);
    await this.page.locator('#last_name').fill(d.lastName);
    await this.page.locator('#dob').fill(d.dob);
    await this.page.locator('#address').fill(d.street);
    await this.page.locator('#postcode').fill(d.postcode);
    await this.page.locator('#city').fill(d.city);
    await this.page.locator('#state').fill(d.state);
    await this.page.locator('#country').selectOption(d.country);
    await this.page.locator('#phone').fill(d.phone);
    await this.page.locator('#email').fill(d.email);
    await this.page.locator('#password').fill(d.pass);
    await this.page.locator('button[type="submit"]').click();
  }
}
