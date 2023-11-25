# Cypress Starter Project

## About

This is a starter project for Cypress including options and example tests. It contains sample Cypress tests and useful configurations for running end-to-end tests. This also has in-built mochawesome-reporter.

## Project Structure

- `visit_main_page.cy.js` - Opens the base URL set in `cypress.config.js`.
- `auth_credentials.json` - Stores user credentials (username and password).
- `commands.js` - Contains a custom command (`login`) for logging in.
- `constants.js` - Contains constants, available globally. Example: constants.SEARCH_TIMEOUT_SMALL.
- `e2e.js` - Sets the browser resolution and ignores possible front-end errors.
- `cypress.config.js` - Configuration file with Cypress settings:
  - `watchForFileChanges`: Disables automatic test execution upon file changes.
  - `baseUrl`: Defines the base URL for tests.
  - `defaultCommandTimeout`: Adjusts the timeout for commands.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <project_folder>
2.  ```bash
   npm install
3. npx cypress run --browser firefox --headless

