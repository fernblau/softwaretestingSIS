import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';

test.describe('User Registration', () => {
  test('Register a new customer successfully', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto();

    await registerPage.registerNewUser({
      firstName: 'John',
      lastName: 'Doe',
      dob: '1990-01-01',
      street: 'Main St 1',
      postcode: '10000',
      city: 'Berlin',
      state: 'Berlin',
      country: 'DE',
      phone: '123456789',
      email: `user_${Date.now()}_${Math.floor(Math.random() * 10000)}@test.com`,
      pass: 'Password123!Aa',
    });

    await expect(page).toHaveURL(/\/auth\/login/);
  });
});
