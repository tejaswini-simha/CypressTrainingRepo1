/// <reference types="cypress" />
import { When, Then, Given, Before, BeforeAll, After,AfterAll, world} from "@badeball/cypress-cucumber-preprocessor";

// I will be able to retrieve "something" from the variable named "item1"
Then("I will be able to retrieve {string} from the variable named {string}", (retrievedDataValueShouldBeThis, varName) => {
    cy.log("Retrieved from Cypress.env :: " + Cypress.env(varName));
    expect(Cypress.env(varName)).contains(retrievedDataValueShouldBeThis);
})

When("I have stored something in the variable named item1 in the previous scenario", function () {
    cy.log("Do Nothing here");
});