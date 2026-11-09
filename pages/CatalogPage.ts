import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CatalogPage extends BasePage {
  async openFirstProduct() { 
    await this.page.goto('/'); 
  }
  async addProductToCart() { 
    // Заглушка клика
  }
  async goToCart() { 
    await this.page.goto('/cart'); 
  }
}
