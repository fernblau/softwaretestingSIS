# Project Description: Test Automation with Playwright

## Overview
This project automates end-to-end (E2E) user workflows for the **Practice Software Testing — Toolshop** web application ([https://practicesoftwaretesting.com/](https://practicesoftwaretesting.com/)) using **Playwright Test** and **TypeScript** structured with the **Page Object Model (POM)** pattern.

## Goals
- Build a maintainable, reliable automated regression suite covering at least **5 distinct test suites** across authentication, product discovery, shopping cart/checkout, and account recovery.
- Eliminate flaky waits and silent error swallowing by using Playwright's built-in auto-waiting locators (`getByTestId`, `toHaveURL`, `toBeVisible`).
- Integrate the suite into a **GitHub Actions CI/CD pipeline** with parallel sharding (`--shard=i/4`), JUnit XML reporting, and merged HTML reports.

## Project Structure
- `pages/` — Page Object classes (`BasePage.ts`, `RegisterPage.ts`, `LoginPage.ts`, `CatalogPage.ts`, `ForgotPasswordPage.ts`) encapsulating page locators and user actions.
- `tests/` — 5 automated Playwright test suites (`01-register.spec.ts` through `05-reset-password.spec.ts`).
- `playwright.config.ts` — Shared local and CI configuration (`process.env.CI`).
- `merge.config.ts` — Configuration for merging sharded blob reports into HTML and JUnit outputs.
- `.github/workflows/playwright.yml` — GitHub Actions workflow running 4 parallel shards and merging reports.

## List of Automated Test Cases

| ID | Suite | Test Case | Expected Result |
| --- | --- | --- | --- |
| TC-01 | `01-register.spec.ts` | Register a new customer successfully with all required address fields (`house_number`, `postal_code`, `street`, `city`, `state`, `country`) and a strong password | User is registered and redirected to `/auth/login` |
| TC-02 | `02-login.spec.ts` | Login fails with invalid credentials | Error alert (`.alert-danger`) is displayed on `/auth/login` |
| TC-03 | `02-login.spec.ts` | Login succeeds with a newly registered customer account | User is authenticated and redirected to `/account` with the page title visible |
| TC-04 | `03-buy-product.spec.ts` | Add a product from the catalog to the shopping cart and proceed to checkout | Cart updates and `/checkout` displays the selected product title |
| TC-05 | `04-search-filter.spec.ts` | Search catalog for `"Pliers"` | Matching product cards containing `"Pliers"` are displayed |
| TC-06 | `04-search-filter.spec.ts` | Sort catalog products by Price (Low - High) | Product list updates and product prices remain visible |
| TC-07 | `05-reset-password.spec.ts` | Request password reset with a valid registered email and an unregistered email | Success alert appears for the valid email; error alert appears for the invalid email |
