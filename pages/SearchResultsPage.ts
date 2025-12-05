import { Page, expect } from '@playwright/test';
import { LOCATORS } from '../utils/locators';

export class SearchResultsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async switchToMapView() {
    await this.page.locator(LOCATORS.SearchResultsPage.gridViewButton).click({ delay: 200 });
    await this.page.locator(LOCATORS.SearchResultsPage.mapViewButton).click();

    await this.page.waitForLoadState('networkidle');
    await this.assertMapIsLoaded();
  }

  async assertMapIsLoaded() {
    await expect(
      this.page.locator(LOCATORS.SearchResultsPage.googleMapsMarker).first()
    ).toBeVisible({ timeout: 15000 });
  }
}
