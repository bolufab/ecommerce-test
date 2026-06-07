describe('Ecommerce simulator - Full Checkout Flow', () => {
  it('should add items to cart and checkout successfully', () => {

    cy.visit('https://qaarena.online/arena/simulator/ecommerce')

    // Add 4th product
    cy.get('[data-cy^="ecommerce-add-to-cart"]').eq(3).click()

    // Click Accessories tab
    cy.contains('Accessories').click()

    // Add 2nd accessory
    cy.get('[data-cy^="ecommerce-add-to-cart"]').eq(1).click()

    // Open cart
    cy.contains('Cart').click()

    // Checkout
    cy.contains('Proceed to Checkout').click()

    // Verify success
    cy.contains('Order Placed Successfully').should('be.visible')

  })
})
