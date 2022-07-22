/// <reference types="Cypress"/>

describe('Tags Article test suite', () => {
    before(() => {
        cy.visit('https://react-redux.realworld.io/')
    })

    it('open the singin page and enter credentials', () => {
        // using the custom commands to signin
        cy.get(':nth-child(2) > .nav-link').click()
        cy.signin('lukas@uks', 'letsdoit')

        // without using the custom commands
        // cy.get(':nth-child(2) > .nav-link').click()
        // cy.get(':nth-child(1) > .form-control').clear().type('lukas@uks')
        // cy.get(':nth-child(2) > .form-control').clear().type('letsdoit')
        // cy.get('.btn').click()

        // waiting for the page to load fully 
        cy.wait(2*1000)
        
    });

    it('check the tag implementations', () => {
        cy.get('.sidebar > .tag-list > :nth-child(1)').click()
        cy.wait(2000)
        cy.get('.feed-toggle > .nav > :nth-child(3) > .nav-link').contains('implementations')
    })

    it('check the tag welcome', () => {
        cy.get('.sidebar > .tag-list > :nth-child(2)').click()
        cy.wait(2000)
        cy.get('.feed-toggle > .nav > :nth-child(3) > .nav-link').contains('welcome')
    })

    it('check the tag welcome', () => {
        cy.get('.sidebar > .tag-list > :nth-child(3)').click()
        cy.wait(2000)
        cy.get('.feed-toggle > .nav > :nth-child(3) > .nav-link').contains('introduction')
    })
})