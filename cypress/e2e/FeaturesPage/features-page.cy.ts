/// <reference types="Cypress" />

describe('Visit Features Page', () => {
    it('Should redirect to /en/home', () => {
      cy.visit('localhost:3000/features')
      cy.url().should('eq', 'http://localhost:3000/en/features') 
    })
  })