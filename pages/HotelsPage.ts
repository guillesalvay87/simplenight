import { Page } from '@playwright/test';
import { LOCATORS } from '../utils/locators';

export class HotelsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async search(location: string): Promise<void> {
    // LOCATION
    await this.page.getByTestId(LOCATORS.HotelsPage.locationTrigger).click();
    await this.page.getByTestId(LOCATORS.HotelsPage.locationInput).fill(location);

    await this.page.waitForSelector(`span:text-is("${location}")`);
    await this.page.getByText(location, { exact: true }).click();

    // CALENDAR
    await this.page.getByTestId(LOCATORS.HotelsPage.calendar).click();

    const next = this.page.locator(LOCATORS.HotelsPage.monthNext);
    for (let i = 0; i < 2; i++) {
      await next.click({ force: true });
      await this.page.waitForTimeout(300);
    }

    for (let i = 0; i < 2; i++) {
      await this.page.getByTestId(LOCATORS.HotelsPage.checkIn).click();
    }

    await this.page.getByTestId(LOCATORS.HotelsPage.checkOut).click();
    await this.page.getByTestId(LOCATORS.HotelsPage.calendarDone).click();

    // GUESTS
    await this.page.getByTestId(LOCATORS.HotelsPage.guestsButton).click();
    await this.page.locator(LOCATORS.HotelsPage.addChildButton).click();

    await this.page.locator(LOCATORS.HotelsPage.child1AgeDropdown).click();
    const options = this.page.locator(LOCATORS.HotelsPage.child1AgeOption);
    await options.first().waitFor({ state: 'visible' });
    await options.nth(2).click({ force: true });

    // SEARCH
    await this.page.getByTestId(LOCATORS.HotelsPage.searchButton).click();
  }
}
