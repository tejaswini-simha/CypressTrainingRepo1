/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

import loginPage from '../pages/LoginPage';
import brkrInsPage from '../pages/BrkrInsPage';
import testData from '../../../fixtures/test-users-aws.json';

describe("Login Page test", ()=>{
    it("Login Test for Insurance website", ()=> {
        cy.visit("https://demo.guru99.com/insurance/v1/index.php");
        loginPage.enterEmail(testData[0].username);
        loginPage.enterPassword(testData[0].password);
        loginPage.clickLoginBtn();
        brkrInsPage.verifyHeader(testData[0].welcomeMsg);
    })
})