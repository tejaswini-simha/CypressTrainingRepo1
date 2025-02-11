/// <reference types="cypress" />
import { When, Then, Given, Before, BeforeAll, After,AfterAll,world} from "@badeball/cypress-cucumber-preprocessor";

BeforeAll(() => {
    cy.log("Cucumber's Before All called");
})

before(() => {
    cy.log("Mocha's before() called");
})

beforeEach(()=> {
    cy.log("Mocha's beforeEach() called");
})

after(() => {
    cy.log("Mocha's after() called");
})

afterEach(()=> {
    cy.log("Mocha's afterEach() called");
})

Before(() => {
    cy.log("Cucumber's Before called");
})

After(()=> {
    cy.log("Cucumber's After called");
})


AfterAll(()=> {
    cy.log("Cucumber's AfterAll called");
})

Given("user navigates to the website", (url) =>{
    cy.visit("https://demo.guru99.com/test/newtours/index.php");
})

When("{string} enter(s) the given credentials", (string, datatable) => {
    datatable.hashes().forEach((element)  => {
        cy.get('input[name="userName"]').type(element.username);
        cy.get('input[name="password"]').type(element.password);
    });
})

When("user clicks on login button", () =>{
    cy.get('input[type="submit"]').click();
})

Then("validate whether {string} is displayed", (validation_message) => {
    cy.contains(validation_message);
})

When("{string} enter(s) the {string} and {string}", function (string, username, password) {
    cy.get('input[name="userName"]').type(username);
    cy.get('input[name="password"]').type(password);
})

Then("Something else", function () {
    cy.log("Someting else");
});

When("I store {string} in a variable named {string}", function(passedValue, varName) {
    Cypress.env(varName, passedValue);

    // this.data.passedValue = passedValue;
})
