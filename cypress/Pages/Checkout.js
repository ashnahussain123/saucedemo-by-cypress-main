
//class implementations of checkout actions
export default class Checkout {

    //Navigate to Shopping Cart
    navigate_to_cart() {
        cy.get('.shopping_cart_link').click();
    }

    //
    click_checkout() {
        cy.get('[data-test="checkout"]').click();
    }

    //Fill personal information  
    fill_Info() {
        //using fixture data to fill the form
        cy.fixture('data.json').then((data) => {
            cy.get('[data-test="firstName"]').type(data.Personalinfo.Firstname);
            cy.get('[data-test="lastName"]').type(data.Personalinfo.Lastname);
            cy.get('[data-test="postalCode"]').type(data.Personalinfo.code);
        });
        //click on continue button
        cy.get('[data-test="continue"]').click();
    }

    //finish shopping and perform assertion on confirmation message
    finish_shopping() {
        cy.get('[data-test="finish"]').click();

        //Assertion on confirmation message
        cy.get('.complete-header[data-test="complete-header"]').should('be.visible').and('contain', 'Thank you for your order!');
        
    }

}