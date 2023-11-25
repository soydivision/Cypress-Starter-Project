Cypress.Commands.add('login', (user, password) => {
    cy.visit('/login')
    cy.get('input[name="username"]').type(user)
    cy.get('input[name="password"]').type(password)
    cy.get('form#login').submit()
})

// Very handy custom command, default value for delay between keystrokes is 100ms, although this can be altered
Cypress.Commands.add('typeSlow', { prevSubject: 'element' }, (subject, text, options = {}) => {
    const { delay = 100 } = options;
    const validDelay = delay > 0 ? delay : 100;
    cy.wrap(subject).type(text, { delay: validDelay });
});

Cypress.Commands.add('search', { prevSubject: false }, (text) => {
    cy.get('input[type="search"]').type(text).type('{enter}');
});

Cypress.Commands.add('typeToPageBody', (text) => {
    cy.get('body').type(text);
}); // this one is interesting, sometimes you can't type into input in a straight forward manner, using cy.type(); Well, you can somehow click on the input (using cy.get('input').click({ force: true }) for example) and then type the text you want.
