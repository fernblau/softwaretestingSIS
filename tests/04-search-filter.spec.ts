import { test, expect } from '@playwright/test';
import { CatalogPage } from '../pages/CatalogPage';

test.describe('Product Search and Filtering', () => {
  test('Search for Pliers returns matching products', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.goto();
    await catalogPage.searchProduct('Pliers');

    const productNames = await catalogPage.getProductNames();
    await expect(productNames.first()).toBeVisible();
    const count = await productNames.count();
    expect(count).toBeGreaterThan(0);

    const firstTitle = (await productNames.first().textContent())?.toLowerCase() ?? '';
    expect(firstTitle).toContain('pliers');
  });

  test('Sort products by Price (Low - High)', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.goto();
    await page.getByTestId('sort').selectOption('price,asc');
    await expect(page.getByTestId('product-price').first()).toBeVisible();
  });
});
