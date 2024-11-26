class RequestQuotationPage {
    css = {
        pageHeader: "h2",
        incidents: "#quotation_incidents",
        registration: "#quotation_vehicle_attributes_registration",
        annualMileage: "#quotation_vehicle_attributes_mileage",
        vehicleValue: "#quotation_vehicle_attributes_value",
        parkingLocationDropdown: "#quotation_vehicle_attributes_parkinglocation",
        calculatePremiumBtn: "[value='Calculate Premium']"
    }

    fillQuotationDetails(quotationDetails){
        cy.get(css.incidents).type(quotationDetails.incidents);
        cy.get(css.registration).type(quotationDetails.registration)
    }

    submitQuotation(){
        cy.get(css.calculatePremiumBtn).click();
    }


}

module.exports = new RequestQuotationPage();