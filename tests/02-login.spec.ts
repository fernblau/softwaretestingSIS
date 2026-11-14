import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('User Login', () => {
  test('Login fails with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('invalid_user@test.com', 'WrongPassword123!');
    await expect(await loginPage.getErrorMessage()).toBeVisible();
  });

  test('Login succeeds with newly registered user', async ({ page, request }) => {
    const email = `login_${Date.now()}_${Math.floor(Math.random() * 10000)}@test.com`;
    const password = 'Password123!Aa';

    const res = await request.post('https://api.practicesoftwaretesting.com/users/register', {
      data: {
        first_name: 'Jane',
        last_name: 'Smith',
        dob: '1992-05-15',
        address: {
          street: 'Oak Ave 12',
          city: 'Berlin',
          state: 'Berlin',
          country: 'DE',
          postal_code: '10115',
        },
        phone: '987654321',
        email,
        password,
      },
    });
    expect(res.ok()).toBeTruthy();

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(email, password);
    await expect(page).toHaveURL(/\/account/);
    await expect(page.getByTestId('page-title')).toBeVisible();
  });
});
