/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('');
    cy.wait(1000);
    cy.get('[data-testid=save-cookie-settings]').click({ force: true });
  });

  it('renders home page texts', () => {
    cy.get('[data-testid=contact-us-button]').click({ force: true });
    cy.get('#__next').should('include.text', 'Investment Onboarding');
  });
});
