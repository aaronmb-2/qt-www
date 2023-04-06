/// <reference types="Cypress" />

describe('Check Home Page brokers components', () => {
    it('Should show the 6 connected brokers', () => {
      cy.visit('localhost:3000')
      cy.get("#home-brokers a").should('have.length', 2)
    })
  })