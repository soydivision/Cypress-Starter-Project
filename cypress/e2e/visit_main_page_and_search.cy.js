import { constants } from "../support/constants";
import data from "../fixtures/search_query.json"

describe('Home run test', () => {
    it('Can visit main page and search', () => {
        cy.visit('/');
        cy.wait(constants.TIMEOUT_SMALL);
        cy.search(data.query);
    });
});
