import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

test.describe('User Login', () => {
  test('Login fails with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('invalid_user@test.com', 'WrongPassword123!');
    await expect(await loginPage.getErrorMessage()).toBeVisible();
  });

  test('Login succeeds with newly registered user', async ({ page }) => {
    const email = `login_${Date.now()}_${Math.floor(Math.random() * 10000)}@test.com`;
    const password = 'Password123!Aa';

    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    await registerPage.registerNewUser({
      firstName: 'Jane',
      lastName: 'Smith',
      dob: '1992-05-15',
      street: 'Oak Ave 12',
      postcode: '10115',
      city: 'Berlin',
      state: 'Berlin',
      country: 'DE',
      phone: '987654321',
      email,
      pass: password,
    });
    await expect(page).toHaveURL(/\/auth\/login/);

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(email, password);
    await expect(page).toHaveURL(/\/account/);
    await expect(page.getByTestId('page-title')).toBeVisible();
  });
});
