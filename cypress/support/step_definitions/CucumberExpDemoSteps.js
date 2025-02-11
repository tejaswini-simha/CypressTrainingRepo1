/// <reference types="cypress" />
import { When, Then, Given, Before, BeforeAll, After,AfterAll} from "@badeball/cypress-cucumber-preprocessor";

Given('there are {int} {word}', (count, fruitName) => {
    cy.log(count, fruitName)
  });

  Given('I have {float} kilos of cucumbers', (weight) => {
    cy.log(weight)
  });

  Given('I have a {word} cucumber', (color) => {
    cy.log(color)

  });

  Given('I have both {string} cucumbers', (colors) => {
    cy.log(colors)
  });

  Given('I have a {} cucumbers', (type) => {
    cy.log(type)
  });