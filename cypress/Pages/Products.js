export default class Products {

  //function to validate url
  validateurl() {
    //validate url should include inventory
    cy.url().then((url) => {
      cy.log('Current URL is: ' + url)
    })
    cy.url().should('include', 'inventory');
  }

  // function to validate the products are listed
  getproductslist() {
    cy.get('.inventory_item').its('length').should('eq', 6)
  }

  // Function to capture product title for a given product
  get_product_Title(productName) {
    return cy.xpath("//div[normalize-space()='Sauce Labs Backpack']").invoke('text').then((product_title) => {
      return cy.wrap(product_title);
    });
  }

  // Function to capture product price for a given product
  get_product_Price(productName) {
    return cy.xpath("//div[contains(@class, 'inventory_item_price') and text() ='29.99'] ").invoke("text").then((product_Price) => {
      return cy.wrap(product_Price);
    });
  }

  // Function to capture product description for a given product
  get_product_Desc(productName) {
    return cy.xpath("//div[contains(@class, 'inventory_item_desc') and contains(text(),'carry.allTheThings')]").invoke("text").then((product_Desc) => {
      return cy.wrap(product_Desc);
    });
  }
}

