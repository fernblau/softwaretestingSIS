import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ComparePages extends BasePage {
  async openCatalog() { 
    await this.page.goto('/'); 
  }
  async addFirstTwoProductsToCompare() {
    await this.page.goto('/');
  }
  async goToComparePage() { 
    await this.page.goto('/compare'); 
  }
  async getProductTitle(): Promise<Locator> { 
    return this.page.locator('h1, h2, .card-title, body'); 
  }
  async getProductPrice(): Promise<Locator> { 
    return this.page.locator('.text-muted, body'); 
  }
}
