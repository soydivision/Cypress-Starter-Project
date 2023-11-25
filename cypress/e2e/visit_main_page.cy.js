describe('Home run test', () => {
    it('Can visit main page', () => {
        cy.visit('/'); // base url is retrieved from cypress.config.js
    });
});
