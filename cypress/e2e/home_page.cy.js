import selectors from '../fixtures/selectors.json'

describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get(selectors.authorization).should('be.visible');
  })
})