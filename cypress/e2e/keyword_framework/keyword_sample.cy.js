/// <reference types="cypress" />

describe('Login to Demo Tours using keyword framework', () => {
    const testData =  {
        username: 'admin',
        password: 'admin'
    };

    it('Login to Demo Tours - Approach 1', () => {
        cy.visitApp("https://www.demo.guru99.com/test/newtours/");
        cy.loginToDemoTours(testData.username, testData.password);
        cy.verifyLogin("Login Successfully");
    })
})