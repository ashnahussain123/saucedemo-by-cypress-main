// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('clear_npm_cache', () => {
    cy.exec('npm cache clean --force', { timeout: 60000 }); // Adjust the timeout as needed
  });

// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login', (url, username, password) => 
  {
  cy.visit(url);
  cy.get("#user-name").clear().type(username);
  cy.get("#password").clear().type(password);
  cy.get("#login-button").click();
});

Cypress.Commands.add('logout', () => { 
  // Call the logout method 
  cy.get("#react-burger-menu-btn").click();
  cy.get("#logout_sidebar_link").click();
  });

