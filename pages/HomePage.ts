import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly hotelsTab = '[data-testid="category-search-bar-tab(static_hotels)"]';

  constructor(page: Page) {
    this.page = page;
  }

  async goto(baseURL: string): Promise<void> {
    await this.page.goto(baseURL, { waitUntil: 'domcontentloaded' });
  }

  async selectHotelsCategory(): Promise<void> {
    await this.page.locator(this.hotelsTab).click();
  }
}
