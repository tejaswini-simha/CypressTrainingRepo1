// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('visitApp', (url) => {
    cy.visit(url);
});

  // Keyword for logging in
Cypress.Commands.add('loginToDemoTours', (username, password) => {
    cy.get('input[name="userName"]').type(username);  // Find username input and type
    cy.get('input[name="password"]').type(password);  // Find password input and type
    cy.get('input[type="submit"]').click();  // Click the submit button
});

  // Keyword for checking if the user is logged in
Cypress.Commands.add('verifyLogin', (welcomeMessage) => {
    cy.contains(welcomeMessage).should('be.visible');
});

Cypress.Commands.add('demoToursAppLogin', (username, password, welcomeMessage) => {
    cy.visitApp();
    cy.loginToDemoTours(username, password);
    cy.verifyLogin(welcomeMessage);
});

Cypress.Commands.add('insDemoLogin', (username, password) => {
    cy.get('#email').type(username);
    cy.get('#password').type(password);
    cy.get(':nth-child(3) > .btn').click();
});

Cypress.Commands.add('insDemoAppLogin', (username, password, welcomeMessage) => {
    cy.visitApp("https://demo.guru99.com/insurance/v1/index.php");
    cy.insDemoLogin(username, password);
    cy.verifyLogin(welcomeMessage);
});

Cypress.Commands.add('insDemoAppSignOff', (username, password, welcomeMessage) => {
    cy.get("input[value='Log out']").click();
});

