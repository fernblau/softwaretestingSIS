import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export interface RegisterUserData {
  firstName: string;
  lastName: string;
  dob: string;
  street: string;
  houseNumber?: string;
  postcode: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email: string;
  pass: string;
}

export class RegisterPage extends BasePage {
  async goto() {
    await this.page.goto('/auth/register');
  }

  async registerNewUser(d: RegisterUserData) {
    await this.page.getByTestId('first-name').fill(d.firstName);
    await this.page.getByTestId('last-name').fill(d.lastName);
    await this.page.getByTestId('dob').fill(d.dob);
    await this.page.getByTestId('country').selectOption(d.country);
    await this.page.getByTestId('postal_code').fill(d.postcode);
    await this.page.getByTestId('house_number').fill(d.houseNumber ?? '42');
    await this.page.getByTestId('street').fill(d.street);
    await this.page.getByTestId('city').fill(d.city);
    await this.page.getByTestId('state').fill(d.state);
    await this.page.getByTestId('phone').fill(d.phone);
    await this.page.getByTestId('email').fill(d.email);
    await this.page.getByTestId('password').fill(d.pass);
    await this.page.getByTestId('register-submit').click();
  }
}
