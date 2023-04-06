/// <reference types="Cypress" />

describe('Visit Home Page', () => {
    it('Should redirect to /en/home', () => {
      cy.visit('localhost:3000')
      cy.url().should('eq', 'http://localhost:3000/en/home') 
    })
  })