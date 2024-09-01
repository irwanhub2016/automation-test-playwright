# SauceDemo Automation Tests
This project contains automated tests for the SauceDemo website using Playwright.

## Prerequisites
- Node.js (v14 or later)
- npm

## Installation
1. Clone this repository
2. Navigate to the project directory
3. Install dependencies:
```shell 
npm install
```

## Running the Tests
To run all tests:
```shell 
npx playwright test
```

To run a specific test file:
```shell 
npx playwright test tests/login-and-add-to-cart.spec.ts
```

To run with browser UI (non-headless):
```shell
npx playwright test --headed
```

## Viewing Test Reports
After running the tests, you can view the HTML report by opening: playwright-report/index.html

JSON test results can be found in: test-results/test-results.json

## Test Cases
1. Login, add item to cart, and verify
2. Login, navigate to About page, and verify