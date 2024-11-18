describe("Filter bar functionality", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Search by country code", () => {
    cy.get('[data-testid="filter-bar-title"]').should("exist");
    cy.get('[data-testid="input"]').should("exist");
    cy.get('[data-testid="input-label"]').should("exist");
    cy.get('[data-testid="input"]').type("US", { timeout: 10000 });
    cy.get('[data-testid="input"]').should("have.value", "US");
    cy.get('[data-testid="country-US"]').should("exist", { timeout: 15000 });
  });

  it("Clears input and shows all countries", () => {
    cy.get('[data-testid="input"]').type("US");
    cy.get('[data-testid="input"]').should("have.value", "US");
    cy.get('[data-testid="country-US"]').should("exist");
    cy.get('[data-testid="input"]').clear();
    cy.get('[data-testid="input"]').should("have.value", "");
    cy.get('[data-testid="country-AE"]').should("exist");
  });

  it('Search is case-insensitive', () => {
    cy.get('[data-testid="input"]').type('us');
    cy.get('[data-testid="input"]').should('have.value', 'us');
    cy.get('[data-testid="country-US"]').should('exist');
  });
});
