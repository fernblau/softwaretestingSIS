import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ComparePages extends BasePage {
  async openCatalog() { 
    await this.page.goto('/'); 
  }
  async addFirstTwoProductsToCompare() {
    await this.page.locator('.card').nth(0).click();
    await this.page.locator('[data-test="add-to-compare"]').click();
    await this.page.goto('/');
    await this.page.locator('.card').nth(1).click();
    await this.page.locator('[data-test="add-to-compare"]').click();
  }
  async goToComparePage() { 
    await this.page.goto('/compare'); 
  }
  async getProductTitle(): Promise<Locator> { 
    return this.page.locator('h1, h2, .card-title'); 
  }
  async getProductPrice(): Promise<Locator> { 
    return this.page.locator('.text-muted'); 
  }
}
