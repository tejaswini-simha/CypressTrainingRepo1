/// <reference types="cypress" />
import testData from '../../fixtures/test-users-aws.json';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});


describe('Login to Demo Tours using keyword framework', () => {

    it('Login to Demo Tours - Approach 1', () => {
        testData.forEach((data) => {
            cy.visit("https://demo.guru99.com/insurance/v1/index.php");
            cy.get('#email').type(data.username);
            cy.get('#password').type(data.password);
            cy.get(':nth-child(3) > .btn').click();
            cy.contains(data.welcomeMsg).should('be.visible'); //Note that the output is also verified from the data files in data driven and hybrid frameworks
            // cy.get("input[value='Log out']").click();
        })
    })
})