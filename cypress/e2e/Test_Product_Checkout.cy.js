import Products from "../Pages/Products";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";


//create objects
const cart_object = new Cart();
const checkout_object = new Checkout();
const product_object = new Products();

//Loading fixture Data
describe('Shopping', () => {
   beforeEach(function () {
      cy.fixture('credentials').then(function (data) {
         this.data = data;
      });
   });

   it('Shopping', function () {

      //Custom command for clearing cache
      cy.clear_npm_cache();
     
      //Custom command for login
      cy.login(this.data.url, this.data.username, this.data.password);
      
      // Requirement - 1 : Validate URL
      product_object.validateurl();
      cy.wait(5000);

      // Requirement -2 : Validate product list
      product_object.getproductslist();

      // Fetch Product Title, Product Price and Product Description before adding the product to Cart
      product_object.get_product_Title().then((value) => {
         cy.wrap(value).as('producttitle');
      })

      product_object.get_product_Price().then((value) => {
         cy.wrap(value).as('productprice');
      })

      product_object.get_product_Desc().then((value) => {
         cy.wrap(value).as('productdesc');
      })

      // Add item to the Cart and navigate to the Cart
      cy.wait(5000);
      cart_object.add_items();
      cart_object.navigate_to_cart();
      cy.wait(5000);

      // Requirement -3 : Verify Product Title before Checkout
      cy.get('@producttitle').then((value) => {
         cy.log('Cart Title:', value);
         cart_object.verify_product_title(value);
      })

      // Requirement -4 : Verify Product Price before Checkout
      cy.get('@productdesc').then((value) => {
         cy.log('Cart Desc:', value);
         cart_object.verify_product_desc(value);
      })

      // Requirement - 5: Verify Product Description before Checkout
      cy.get('@productprice').then((value) => {
         cy.log('Cart Price:', value);
         cart_object.verify_product_price(value);
      })

      // Checkout and fill the personal information
      checkout_object.click_checkout();
      cy.wait(5000);
      checkout_object.fill_Info();

      //Requirement - 6 : Validating the message after successful shopping
      checkout_object.finish_shopping();

      cy.wait(1000);
      cy.logout();

   });

});