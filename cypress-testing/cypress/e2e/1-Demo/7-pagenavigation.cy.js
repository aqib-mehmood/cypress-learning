/// <reference types="Cypress"/>

describe('Pagination Article test suite', () => {
    before(() => {
        cy.visit('https://react-redux.realworld.io/')
    })

    it('open the singin page and enter credentials', () => {
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get(':nth-child(1) > .form-control').clear().type('lukas@uks')
        cy.get(':nth-child(2) > .form-control').clear().type('letsdoit')
        cy.get('.btn').click()
        cy.wait(2*1000)
        
    });

    it('check the pagination exist', () => {
        cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link').click()
        cy.scrollTo('bottom', { duration: 5*1000 })
        cy.scrollTo('bottom', { duration: 5*1000 }).should('exist')
        
    });

})