import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CatalogPage extends BasePage {
  async goto() {
    await this.page.goto('/');
  }

  async searchProduct(query: string) {
    await this.page.getByTestId('search-query').fill(query);
    await this.page.getByTestId('search-submit').click();
    await this.page.getByTestId('search_completed').waitFor({ state: 'visible' }).catch(() => {});
  }

  async getProductNames(): Promise<Locator> {
    return this.page.getByTestId('product-name');
  }

  async openFirstProduct() {
    await this.page.goto('/');
    const firstCard = this.page.locator('a.card').first();
    await firstCard.waitFor({ state: 'visible' });
    await firstCard.click();
  }

  async addProductToCart() {
    const addBtn = this.page.getByTestId('add-to-cart');
    await addBtn.waitFor({ state: 'visible' });
    await addBtn.click();
    await this.page.getByTestId('nav-cart').waitFor({ state: 'visible' });
  }

  async goToCart() {
    await this.page.getByTestId('nav-cart').click();
  }
}
