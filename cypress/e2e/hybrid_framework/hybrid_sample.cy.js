/// <reference types="cypress" />
import testData from '../../fixtures/test-users-aws.json';
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe('Login Test -- Automation test store - Hybrid framework', () => {
    beforeEach(() => {
      cy.visitApp("https://demo.guru99.com/insurance/v1/index.php");
    })

    it('should login with different credentials', function () {
        testData.forEach((data) => {
        //   cy.get("a").contains("Login or register").click();
          cy.insDemoAppLogin(data.username, data.password, data.welcomeMsg);
          cy.insDemoAppSignOff();
          cy.log("Signed off");
        })
    })
  })
