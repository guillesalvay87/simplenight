import { Page, expect } from '@playwright/test';

export class SearchResultsPage {
  readonly page: Page;

  readonly gridViewButton = '[data-testid="category(static_hotels)_search-results_layout-select_trigger"]';
  readonly mapViewButton = '[data-testid="category(static_hotels)_search-results_layout-select_option(map)"]';

  constructor(page: Page) {this.page = page;}

  async switchToMapView() {
    await this.page.locator(this.gridViewButton).click({ delay: 200 });
    await this.page.locator(this.mapViewButton).click();

    await this.page.waitForLoadState('networkidle');
    await this.assertMapIsLoaded();
  }

  async assertMapIsLoaded() {
    const marker = this.page.locator('gmp-advanced-marker').first();

    await expect(marker).toBeVisible({
      timeout: 15000, // Google Maps may take a while to load
    });
  }
}
