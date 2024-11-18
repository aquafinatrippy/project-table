describe("Table", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should display all countries in list", () => {
    cy.get('[data-testid="table-content"]').should("exist");
    cy.get('[data-testid="table-content"] div').should(
      "have.length.greaterThan",
      0
    );
  });

  it("Incorrect search results", () => {
    cy.get('[data-testid="input"]').type("RANDOMSTUFF");
    cy.get('[data-testid="no-results-text"]').should("exist");
  });
});
