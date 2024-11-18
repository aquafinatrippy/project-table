describe('Input component tests', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('Search by country code', () => {
      cy.get('[data-testid="filter-bar-title"]').should('exist');
      cy.get('[data-testid="input"]').should('exist');
      cy.get('[data-testid="input-label"]').should('exist');
      cy.get('[data-testid="input"]').type('US', { timeout: 10000 });
      cy.get('[data-testid="input"]').should('have.value', 'US');
      cy.get('[data-testid="country-US"]').should('exist', { timeout: 15000 });
    });
  
  });