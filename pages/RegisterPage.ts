import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {
  async goto() { 
    await this.page.goto('/auth/register'); 
  }
  async registerNewUser(d: any) {
    await this.page.locator('[formcontrolname="first_name"]').fill(d.firstName);
    await this.page.locator('[formcontrolname="last_name"]').fill(d.lastName);
    await this.page.locator('[formcontrolname="dob"]').fill(d.dob);
    await this.page.locator('[formcontrolname="address"]').fill(d.street);
    await this.page.locator('[formcontrolname="postcode"]').fill(d.postcode);
    await this.page.locator('[formcontrolname="city"]').fill(d.city);
    await this.page.locator('[formcontrolname="state"]').fill(d.state);
    await this.page.locator('[formcontrolname="country"]').selectOption(d.country);
    await this.page.locator('[formcontrolname="phone"]').fill(d.phone);
    await this.page.locator('[formcontrolname="email"]').fill(d.email);
    await this.page.locator('[formcontrolname="password"]').fill(d.pass);
    await this.page.locator('button[type="submit"]').click();
  }
}
