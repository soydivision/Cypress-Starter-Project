import mainPage from '../page_objects/mainPage'

describe('', () => {
    it('Clicks news', () => {
        cy.visit('/');
        mainPage.news_button.click();
        cy.title().should('include', 'News');
    });
});
