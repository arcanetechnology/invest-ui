/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('');
    cy.wait(1000);
    cy.get('[data-testid=save-cookie-settings]').click({ force: true });
  });

  it('renders home page texts', () => {
    cy.contains('#__next h1', 'Build generational wealth with our actively managed crypto fund.');
  });
});
