class BrkrInsPage {
    css = {
        pageHeader: "div"
    }

    verifyHeader(headerText){
        cy.get(this.css.pageHeader).should('contain', headerText);
    }
}

module.exports = new BrkrInsPage();