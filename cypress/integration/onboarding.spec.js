/* eslint-disable max-len */
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

  const clickContinue = () => {
    cy.get('[data-testid=continue-button]').click({ force: true });
  };

  const answerNo = () => {
    cy.get('[data-testid=answer-no]').click({ force: true });
    clickContinue();
  };

  const answerYes = () => {
    cy.get('[data-testid=answer-yes]').click({ force: true });
    clickContinue();
  };

  const checkCollectDataStep = () => {
    cy.get('[data-testid=collect-data-step]').should('be.visible');
  };

  const checkAppology = () => {
    cy.get('#__next').should('include.text', 'We unfortunalety can not offer you a spot in our fund right now.');
  };

  const checkWarning = () => {
    cy.get('#__next').should('include.text', 'Warning');
  };

  it('renders the popup correctly', () => {
    cy.get('[data-testid=contact-us-button]').click({ force: true });
    cy.get('#__next').should('include.text', 'Investment Onboarding');
  });

  it('answering yes on the first question leads to collect user data', () => {
    cy.get('[data-testid=contact-us-button]').click({ force: true });
    clickContinue();

    cy.get('#__next').should('include.text', 'Do you represent an entitiy which is regulated to operate in the financial markets?');

    answerYes();

    checkCollectDataStep();
  });

  it('answering no-yes leads to collect user data', () => {
    cy.get('[data-testid=contact-us-button]').click({ force: true });
    clickContinue();

    answerNo();
    cy.get('#__next').should('include.text', 'Do you represet a large undertaking meeting two of the following size requirements?');
    answerYes();

    checkCollectDataStep();
  });

  it('answering no-no-yes leads to collect user data', () => {
    cy.get('[data-testid=contact-us-button]').click({ force: true });
    clickContinue();

    answerNo();
    answerNo();
    cy.get('#__next').should('include.text', 'Do you represent any of the following institutions?');
    answerYes();

    checkCollectDataStep();
  });

  it('answering no-no-no-no-no leads to the appology', () => {
    cy.get('[data-testid=contact-us-button]').click({ force: true });
    clickContinue();

    answerNo();
    answerNo();
    answerNo();
    cy.get('#__next').should('include.text', 'Have you carried out transactions, of significant size, in the crypto market at an average frequency of 10 per quarter over the previous four quarters?');
    answerNo();
    cy.get('#__next').should('include.text', 'Does the size of your financial instrument portfolio, defined as including cash deposits and financial instruments exceed 500,000 Euro?');
    answerNo();

    checkAppology();
  });

  it('answering no-no-no-yes-no-no leads to the appology', () => {
    cy.get('[data-testid=contact-us-button]').click({ force: true });
    clickContinue();

    answerNo();
    answerNo();
    answerNo();
    answerYes();
    answerNo();
    cy.get('#__next').should('include.text', 'Have you worked in the financial sector for at least one year in a professional position, which requires knowledge of the transactions or services envisaged?');
    answerNo();

    checkAppology();
  });

  it('answering no-no-no-no-yes-no leads to the appology', () => {
    cy.get('[data-testid=contact-us-button]').click({ force: true });
    clickContinue();

    answerNo();
    answerNo();
    answerNo();
    answerNo();
    answerYes();
    answerNo();

    checkAppology();
  });

  it('answering no-no-no-yes-yes leads to the warning, then collect data step', () => {
    cy.get('[data-testid=contact-us-button]').click({ force: true });
    clickContinue();

    answerNo();
    answerNo();
    answerNo();
    answerYes();
    answerYes();

    checkWarning();

    clickContinue();
    checkCollectDataStep();
  });

  it('answering no-no-no-no-yes-yes leads to the warning, then collect data step', () => {
    cy.get('[data-testid=contact-us-button]').click({ force: true });
    clickContinue();

    answerNo();
    answerNo();
    answerNo();
    answerNo();
    answerYes();
    answerYes();

    checkWarning();

    clickContinue();
    checkCollectDataStep();
  });

  it('answering no-no-no-yes-no-yes leads to the warning, then collect data step', () => {
    cy.get('[data-testid=contact-us-button]').click({ force: true });
    clickContinue();

    answerNo();
    answerNo();
    answerNo();
    answerYes();
    answerNo();
    answerYes();

    checkWarning();

    clickContinue();
    checkCollectDataStep();
  });
});
