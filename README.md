# PW Test Framework

This repository uses Playwright for UI and API testing.

## Test Layers

- UI tests: browser-driven tests in tests/.
- API tests: request-level tests in tests/api/.
- Shared test data tooling: faker-based generators in fixtures/dataFactory.ts.

## Setup

1. Clone the repository.
2. Install dependencies with npm install.

## Running Tests

- Run all tests: npm test
- Run UI tests only: npm run test:ui
- Run API tests only: npm run test:api
- Run smoke tests only: npm run test:smoke
- Open Playwright HTML report: npm run report

## Environment Variables

- UI_BASE_URL: base URL for UI tests. Default is https://www.saucedemo.com
- API_BASE_URL: base URL for API tests. Default is https://dummyjson.com