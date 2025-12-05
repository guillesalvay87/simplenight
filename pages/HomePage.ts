import { Page } from '@playwright/test';
import { LOCATORS } from '../utils/locators';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(baseURL: string): Promise<void> {
    await this.page.goto(baseURL, { waitUntil: 'domcontentloaded' });
  }

  async selectHotelsCategory(): Promise<void> {
    await this.page.locator(LOCATORS.HomePage.hotelsTab).click();
  }
}
