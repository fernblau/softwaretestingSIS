# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 03-buy-product.spec.ts >> Buy a product workflow
- Location: tests/03-buy-product.spec.ts:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[data-test="product-title"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('[data-test="product-title"]') with timeout 5000ms
  - waiting for locator('[data-test="product-title"]')

```

```yaml
- text: View the
- link "Documentation":
  - /url: https://testsmith-io.github.io/practice-software-testing/#/
- text: for this application. Practice Black Box Testing & Bug Hunting
- button "Testing Guide"
- button "🐛 Bug Hunting"
- navigation:
  - link "Practice Software Testing - Toolshop":
    - /url: /
    - img
  - menubar "Main menu":
    - menuitem "Home":
      - link "Home":
        - /url: /
    - menuitem "Categories":
      - button "Categories"
    - menuitem "Contact":
      - link "Contact":
        - /url: /contact
    - menuitem "Sign in":
      - link "Sign in":
        - /url: /auth/login
  - button "Select language": EN
- contentinfo:
  - text: Learn & Explore
  - link "Learn Test Automation Hands-on courses for Playwright, Robot Framework, APIs and more":
    - /url: https://onlinecourses.testsmith.io
  - link "API Spector Open-source API testing, mocking and contract testing":
    - /url: https://api-spector.dev
  - link "GitHub Source code, issues and contributions":
    - /url: https://github.com/testsmith-io/practice-software-testing
  - text: This is a DEMO application, used for software testing training purpose. |
  - link "Privacy Policy":
    - /url: /privacy
  - text: "| Banner photo by"
  - link "Barn Images":
    - /url: https://unsplash.com/@barnimages
  - text: "on"
  - link "Unsplash":
    - /url: https://unsplash.com/photos/t5YUoHW6zRo
  - text: . v2.5 | Built 2026-10-11 | Angular 20.0.5
- button "Open chat":
  - img
- button "Show live shop activity"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { CatalogPage } from '../pages/CatalogPage';
  3  | test('Buy a product workflow', async ({ page }) => {
  4  |   const p = new CatalogPage(page);
  5  |   await p.openFirstProduct();
  6  |   await p.addProductToCart();
  7  |   await p.goToCart();
> 8  |   await expect(page.locator('[data-test="product-title"]')).toBeVisible();
     |                                                             ^ Error: expect(locator).toBeVisible() failed
  9  | });
  10 | 
```