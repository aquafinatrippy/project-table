describe('Input component tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Check if filter bar has all elements', () => {
    cy.get('[data-testid="filter-bar-title"]').should('exist');
    cy.get('[data-testid="input"]').should('exist');
    cy.get('[data-testid="input-label"]').should('exist');
  
  });

  it('Check if table has data', () => {
    cy.get('[data-testid="table-content"]').should('exist');
    cy.get('[data-testid="country-AE"]').should('exist');
  })
});