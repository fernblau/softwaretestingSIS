import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CatalogPage extends BasePage {
  async openFirstProduct() { 
    await this.page.goto('/'); 
    await this.page.locator('.card').first().click(); 
  }
  async addProductToCart() { 
    await this.page.locator('#btn-add-to-cart').click(); 
  }
  async goToCart() { 
    await this.page.locator('a[routerlink="/cart"]').click(); 
  }
}
