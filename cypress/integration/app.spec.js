/// <reference types="cypress" />

describe('app.spec.js', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('displays 4 items by default', () => {
    cy.get('#root > h4').should('have.length', 4)
  })
  it('navigates all the routes', () => {
    cy.visit('/about')
    cy.get('#root')
      .contains('h4', /About Page/i)
      .should('be.visible')

      cy.visit('/cart')
      cy.get('#root')
        .contains('h4', /Cart/i)
        .should('be.visible')

        cy.visit('/products')
        cy.get('#root')
          .contains('h4', /Products/i)
          .should('be.visible')

        cy.visit('/products/1')
        cy.get('#root')
          .contains('h4', /Single Product/i)
          .should('be.visible')
        
        cy.visit('/checkout')
        cy.get('#root')
          .contains('h4', /Checkout/i)
          .should('be.visible')
        
        cy.visit('/foo')
        cy.get('#root')
          .contains('h4', /Error/i)
          .should('be.visible')
  })
})
