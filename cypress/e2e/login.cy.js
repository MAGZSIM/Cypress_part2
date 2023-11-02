import logins from '../fixtures/logins'
import logins2 from '../fixtures/logins2'

describe('should login', () => {
  beforeEach(() => { cy.visit('/') })
  it('login', () => {
    cy.login(logins.login, logins.password)
    cy.contains('Управление залами').should('be.visible');
  })

  logins2.forEach((test) => {
    it(test.name, () => {
      cy.login(test.data.login, test.data.password)
    })
  })
})