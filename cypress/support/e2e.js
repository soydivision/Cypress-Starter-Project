import './commands'
import './constants';
import 'cypress-mochawesome-reporter/register';

before(() => {
    cy.viewport(1280, 720); // setting resolution of the webdriver browser
})

beforeEach(() => {
    Cypress.on('uncaught:exception', () => { return false }) // ignore errors on front-end
})