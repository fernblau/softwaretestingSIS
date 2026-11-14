import { test, expect } from '@playwright/test';
import { CatalogPage } from '../pages/CatalogPage';

test.describe('Product Catalog and Cart', () => {
  test('Add a product to cart and verify it on checkout page', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.openFirstProduct();
    const productName = (await page.getByTestId('product-name').textContent())?.trim();
    expect(productName).toBeTruthy();

    await catalogPage.addProductToCart();
    await catalogPage.goToCart();

    await expect(page).toHaveURL(/\/checkout/);
    await expect(page.getByTestId('product-title')).toContainText(productName!);
  });
});
