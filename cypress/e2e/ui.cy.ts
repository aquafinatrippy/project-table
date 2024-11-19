describe("Home page, elements loading", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Check if filter bar has all elements", () => {
    cy.get('[data-testid="filter-bar-title"]').should("exist");
    cy.get('[data-testid="input"]').should("exist");
    cy.get('[data-testid="input-label"]').should("exist");
  });

  it("Check if table has data", () => {
    cy.get('[data-testid="table-content"]').should("exist");
    cy.get('[data-testid="country-AE"]').should("exist");
  });

  it("Clicks theme switch and checks background color", () => {
    cy.get(".switch-label").click();
    cy.get("body").should("have.css", "background-color", "rgb(255, 255, 255)");
  });
});
