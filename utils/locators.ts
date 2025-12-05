export const LOCATORS = {
  HomePage: {
    hotelsTab: '[data-testid="category-search-bar-tab(static_hotels)"]',
  },

  HotelsPage: {
    locationTrigger: '[data-testid="category(static_hotels)_search-form_location_trigger"]',
    locationInput: '[data-testid="category(static_hotels)_search-form_location_input"]',

    calendar: '[data-testid="category(static_hotels)_search-form_dates_trigger"]',
    monthNext: '[data-direction="next"]',
    checkIn: '[data-testid="category(static_hotels)_search-form_dates_calendar_day(2026-5-20)"]',
    checkOut: '[data-testid="category(static_hotels)_search-form_dates_calendar_day(2026-5-22)"]',
    calendarDone: '[data-testid="category(static_hotels)_search-form_dates_apply-button"]',

    guestsButton: '[data-testid="category(static_hotels)_search-form_guests_trigger"]',
    addChildButton: '[aria-label="Add Child"]',
    child1AgeDropdown: '[class="text-neutral-default w-full rounded-2xl bg-white font-semibold outline outline-1 outline-neutral-fill-text-dividers-stroke-disabled px-4 py-[23px] text-base focus-visible:text-neutral-default focus:text-neutral-default transition-all duration-200 ease-in-out hover:text-brand hover:placeholder:text-brand focus:outline-2 focus:outline-offset-[-2px] focus:outline-brand focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand pe-12 pb-[11px] pt-[35px] text-ellipsis text-start cursor-pointer"]',
    child1AgeOption: '[role="option"]',

    searchButton: '[data-testid="category(static_hotels)_search-form_search-button"]',
  },

  SearchResultsPage: {
    gridViewButton: '[data-testid="category(static_hotels)_search-results_layout-select_trigger"]',
    mapViewButton: '[data-testid="category(static_hotels)_search-results_layout-select_option(map)"]',
    googleMapsMarker: 'gmp-advanced-marker',
  },
};
