# Simplenight QA Automation Challenge – Playwright & TypeScript

Automated test framework built for the QA Automation Engineer challenge.  
The project uses Playwright + TypeScript to automate the hotel booking flow on the Simplenight platform.

Since I'm a mixed-role QA (manual + automation), I completed the assignment up to point 4, as requested.
Take into account that this was my first time working with Playwright and TypeScript.

----------------
## Tech Stack:
- Node.js
- Playwright
- TypeScript

----------------
## Installation:
1. Clone the repository
2. Install dependencies: npm install
3. Run test

----------------
## Project structure:
/config
	env.test.json
/data
	testData.json
/pages
	HomePage.ts
	HotelsPage.ts
	SearchResultsPage.ts
/tests
	hotelSearch.spec.ts
/utils
	locators.ts
playwright.config.ts
tsconfig.json

----------------
## Test Scope: Validate map view in the search results
1. Navigate to https://app.simplenight.com/
2. Select "Hotels" category from the available navbar options
3. Perform a search within the selected category, using input parameters:
- Location: Miami
- Dates: May 20-22
- Guests: 1 Adult + 1 Child
4. Select Map view for the Search results

----------------
## Commands:
1. To execute test: npx playwright test --ui --headed --reporter=html
2. To see the HTML report: npx playwright show-report

----------------
## Author:
- William Salvay, QA Engineer
