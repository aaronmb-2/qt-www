/// <reference types="Cypress" />

describe("Check Home Page brokers components", () => {
  it("Should show the 6 connected brokers", () => {
    cy.visit("localhost:3000/home");
    cy.get("#home-brokers img").should("have.length", 6);
  });
});
