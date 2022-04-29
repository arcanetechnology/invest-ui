/// <reference types="cypress" />

describe('Onboarding', () => {
  beforeEach(() => {
    cy.window().its('sessionStorage').invoke('setItem', 'cypress_secret', Cypress.env('NEXT_PUBLIC_CYPRESS_SECRET'));
    cy.visit('');
    cy.wait(1000);
    cy.get('[data-testid=save-cookie-settings]').click({ force: true });
  });

  afterEach(() => {
    cy.window().its('sessionStorage').invoke('removeItem', 'cypress_secret');
  });

  it('renders home page texts', () => {
    cy.get('[data-testid=contact-us-button]').click({ force: true });
    cy.get('#__next').should('include.text', 'Investment Onboarding');
  });
});
