import { test, expect } from '@playwright/test';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';

test.describe('Password Reset', () => {
  test('Reset password flow with valid and invalid emails', async ({ page, request }) => {
    const email = `reset_${Date.now()}_${Math.floor(Math.random() * 10000)}@test.com`;
    const res = await request.post('https://api.practicesoftwaretesting.com/users/register', {
      data: {
        first_name: 'Alex',
        last_name: 'Tester',
        dob: '1991-03-10',
        address: {
          street: 'Main St 10',
          city: 'Berlin',
          state: 'Berlin',
          country: 'DE',
          postal_code: '10115',
        },
        phone: '123456789',
        email,
        password: 'Password123!Aa',
      },
    });
    expect(res.ok()).toBeTruthy();

    const forgotPasswordPage = new ForgotPasswordPage(page);
    await forgotPasswordPage.goto();
    await forgotPasswordPage.requestPasswordReset(email);
    await expect(await forgotPasswordPage.getSuccessAlert()).toBeVisible();

    await forgotPasswordPage.goto();
    await forgotPasswordPage.requestPasswordReset(`non_existent_${Date.now()}@test.com`);
    await expect(await forgotPasswordPage.getErrorAlert()).toBeVisible();
  });
});
