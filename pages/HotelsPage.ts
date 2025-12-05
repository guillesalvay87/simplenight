import { Page } from '@playwright/test';

export class HotelsPage {
  readonly page: Page;
  readonly locationTrigger = '[data-testid="category(static_hotels)_search-form_location_trigger"]';
  readonly locationInput = '[data-testid="category(static_hotels)_search-form_location_input"]';

  readonly calendar = '[data-testid="category(static_hotels)_search-form_dates_trigger"]';
  readonly monthNext = '[data-direction="next"]';
  readonly checkIn = '[data-testid="category(static_hotels)_search-form_dates_calendar_day(2026-5-20)"]';
  readonly checkOut = '[data-testid="category(static_hotels)_search-form_dates_calendar_day(2026-5-22)"]';
  readonly calendarDone = '[data-testid="category(static_hotels)_search-form_dates_apply-button"]';

  readonly guestsButton = '[data-testid="category(static_hotels)_search-form_guests_trigger"]';
  readonly addChildButton = '[aria-label="Add Child"]';
  readonly child1AgeDropdown = '[class="text-neutral-default w-full rounded-2xl bg-white font-semibold outline outline-1 outline-neutral-fill-text-dividers-stroke-disabled px-4 py-[23px] text-base focus-visible:text-neutral-default focus:text-neutral-default transition-all duration-200 ease-in-out hover:text-brand hover:placeholder:text-brand focus:outline-2 focus:outline-offset-[-2px] focus:outline-brand focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand pe-12 pb-[11px] pt-[35px] text-ellipsis text-start cursor-pointer"]';
  readonly child1AgeOption = '[role="option"]';

  readonly searchButton = '[data-testid="category(static_hotels)_search-form_search-button"]';

  constructor(page: Page) { this.page = page; }

  async search(location: string): Promise<void> { 
    await this.page.locator(this.locationTrigger).click();
    await this.page.locator(this.locationInput).fill(location);
    await this.page.waitForSelector("span:text-is('" + location + "')");
    await this.page.getByText(location, { exact: true }).click();

    await this.page.locator(this.calendar).click();
    const arrow = this.page.locator(this.monthNext);
    for (let i = 0; i < 2; i++) {
      await arrow.click({ force: true });
      await this.page.waitForTimeout(300);}
    for (let i = 0; i < 2; i++) {
      await this.page.locator(this.checkIn).click();}
    await this.page.locator(this.checkOut).click();  
    await this.page.locator(this.calendarDone).click();

    await this.page.locator(this.guestsButton).click();
    await this.page.locator(this.addChildButton).click();
    await this.page.locator(this.child1AgeDropdown).click();
    const options1 = this.page.locator(this.child1AgeOption);
    await options1.first().waitFor({ state: "visible" });
    await options1.nth(2).click({ force: true });
    //await this.page.getByText("3", { exact: true }).click();

    await this.page.locator(this.searchButton).click();

  }
}