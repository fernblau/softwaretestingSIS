import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ComparePages extends BasePage {
  async openCatalog() { 
    await this.page.goto('/'); 
  }
  async addFirstTwoProductsToCompare() {
    await this.page.goto('/compare');
  }
  async goToComparePage() { 
    await this.page.goto('/compare'); 
  }
  async getProductTitle(): Promise<Locator> { 
    return this.page.locator('h1'); 
  }
  async getProductPrice(): Promise<Locator> { 
    return this.page.locator('body'); 
  }
}
