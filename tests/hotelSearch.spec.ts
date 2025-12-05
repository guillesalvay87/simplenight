import { test, expect } from '@playwright/test';
import env from '../config/env.test.json';
import data from '../data/testData.json';
import { HomePage } from '../pages/HomePage';
import { HotelsPage } from '../pages/HotelsPage';
import { SearchResultsPage } from '../pages/SearchResultsPage';

test('View Map flow', async ({ page, baseURL }) => {
  const home = new HomePage(page);
  const hotels = new HotelsPage(page);
  const results = new SearchResultsPage(page);

  // 1. Go to the Simplenight home page
  await home.goto(baseURL || env.baseURL);

  // 2. Select Hotels category
  await home.selectHotelsCategory();

  // 3. Perform search
  await hotels.search(
    data.location,
  );

  // 4. Switch to Map view in the results page
  await results.switchToMapView();

});