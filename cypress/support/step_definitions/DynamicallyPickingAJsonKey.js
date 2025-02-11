/// <reference types="cypress" />
import { When, Then, Given, Before, BeforeAll, After,AfterAll} from "@badeball/cypress-cucumber-preprocessor";
let valueRetrieved;

When("the user passes the {string} and {string}", function (filename, key) {
    cy.fixture(filename).then((fileContents)=> {
        valueRetrieved=fileContents[key].toString();
    })
});

Then("verify the value retrieved is {string}", function(value){
    expect(valueRetrieved).contains(value);
});