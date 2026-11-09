import { test, expect } from '@playwright/test';
import { CatalogPage } from '../pages/CatalogPage';
test('Buy a product workflow', async ({ page }) => {
  const p = new CatalogPage(page);
  await p.openFirstProduct();
  await p.addProductToCart();
  await p.goToCart();
  await expect(page.locator('[data-test="product-title"]')).toBeVisible();
});
