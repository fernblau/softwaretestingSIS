import { test, expect } from '@playwright/test';
import { ComparePages } from '../pages/ComparePages';
test('Compare two products and assert their data', async ({ page }) => {
  const p = new ComparePages(page);
  await p.openCatalog();
  await p.addFirstTwoProductsToCompare();
  await p.goToComparePage();
  await expect((await p.getProductTitle()).first()).toBeVisible();
  await expect((await p.getProductPrice()).first()).toBeVisible();
});
