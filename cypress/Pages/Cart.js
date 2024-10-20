//class implementations of cart actions
export default class Cart{
    //function to add items to cart
    add_items(){
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }
    //function to remove items from cart
    remove_items(){
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    }

     //Navigate to Shopping Cart
     navigate_to_cart() {
        cy.get('.shopping_cart_link').click();
    }
    
    // Verify product name before checkout
    verify_product_title(itemName) {
        cy.get('.inventory_item_name[data-test="inventory-item-name"]').should('have.text', itemName);
    }
   // Verify product description before checkout
    verify_product_desc(itemDesc) {
        cy.get('.inventory_item_desc[data-test="inventory-item-desc"]').should('contain', itemDesc);
    }

    // Verify product price before checkout
    verify_product_price(itemPrice) {
    cy.get('.inventory_item_price[data-test="inventory-item-price"]').should('contain', itemPrice);
    }


}