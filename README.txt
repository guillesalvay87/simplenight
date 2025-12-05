# Simplenight QA Automation Challenge – Playwright & TypeScript

Automated test framework built for the QA Automation Engineer challenge.  
The project uses Playwright + TypeScript to automate the hotel booking flow on the Simplenight platform.

Since I'm a mixed-role QA (manual + automation), and considering this was my first time using Playwright and TypeScript, I completed the assignment up to point 4, as requested.

----------------
## Tech Stack:
- Node.js 18+
- Playwright
- TypeScript

----------------
## Installation:
1. Clone the repository
2. Install dependencies:
	npm install

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
playwright.congif.ts
tsconfig.json
README.txt

----------------
## Test Scenario Covered:
1. Navigate to https://app.simplenight.com
2. Select “Hotels” category
3. Fill destination and dates
4. Search
5. Validate results page

----------------
## Execution:
1. Headed mode (with UI):
	npx playwright test --ui --headed --reporter=html 
	(once open, press green PLAY button)
2. See HTML report:
	npx playwright show-report

----------------
## Author:
- William Salvay, QA Engineer
