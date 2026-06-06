/// <reference types="cypress" />

describe ('Ecommerce simulator - Full Checkout Flow', () => {
  it ('should add items to cart and checkout successfully', () => { 

  cy.visit('https://qaarena.online')
  cy.contains('Automation Simulator').click()
  cy.contains('E-Commerce Simulator').click()

  cy.contains('Add to Cart')eq(3).click()
  cy.contains('Accessories').click()
  cy.contains('Add to Cart').eq(1).click()

  cy.get('.cart-icon').click()
  cy.contains('Proceed to Checkout').click()

  cy.contains('Order Placed Successfully',)
    .should ('be.visible');
 });

});
