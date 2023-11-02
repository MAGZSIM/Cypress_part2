import selectors from '../fixtures/selectors.json'

describe('reservations', () => {

    it('get ticket', () => {
        cy.visit('http://qamid.tmweb.ru')
        cy.get(selectors.day).eq(4).click()
        cy.get(selectors.movie).first().contains("11:00").click()
        cy.get(selectors.choice).click()
    })
})
