/// <reference types="cypress" />
import { When, Then, Given, Before, BeforeAll, After,AfterAll,world} from "@badeball/cypress-cucumber-preprocessor";

BeforeAll(() => {
    cy.log("From Hooks Only :: Cucumber's Before All called");
})

before(() => {
    cy.log("From Hooks Only :: Mocha's before() called");
})

beforeEach(()=> {
    cy.log("From Hooks Only :: Mocha's beforeEach() called");
})

after(() => {
    cy.log("From Hooks Only :: Mocha's after() called");
})

afterEach(()=> {
    cy.log("From Hooks Only :: Mocha's afterEach() called");
})

Before(() => {
    cy.log("From Hooks Only :: Cucumber's Before called");
})

After(()=> {
    cy.log("From Hooks Only :: Cucumber's After called");
})

AfterAll(()=> {
    cy.log("From Hooks Only :: Cucumber's AfterAll called");
})

