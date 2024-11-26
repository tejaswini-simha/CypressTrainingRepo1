class LoginPage {
    css = {
        email: "#email",
        password: "#password",
        loginBtn: ":nth-child(3) > .btn",
        registerBtn: "[href='register.php']",
        pageHeader: "h3"
    }

    getEmailField(){
        return cy.get(this.css.email);
    }

    enterEmail(emailId){
        cy.get(this.css.email).type(emailId);
    }

    enterPassword(password){
        cy.get(this.css.password).type(password);
    }

    clickLoginBtn(){
        cy.get(this.css.loginBtn).click();
    }

    verifyLoginPageHeader(headerText){
        cy.get(this.css.pageHeader).should('contain', headerText);
    }

    clickRegisterBtn(){
        cy.get(this.css.registerBtn).click();
    }
}

module.exports = new LoginPage();