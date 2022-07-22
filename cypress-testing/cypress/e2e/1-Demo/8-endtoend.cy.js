/// <reference types="Cypress"/>

describe('End to end flow test suite', () => {
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

    it('choose the article and comment it', () => {
        cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link').click()
        cy.wait(2*1000)
        cy.get(':nth-child(1) > .preview-link > h1').click()
        cy.wait(2*1000)
        cy.get('.form-control').type('This is a dummy comment')
        cy.get('.card-footer > .btn').click()
        cy.wait(2*1000)
        cy.get('.form-control').clear()
        cy.contains('This is a dummy comment')
    });

    it('choose the article and delete it', () => {
        cy.get(':nth-child(4) > .nav-link').click()
        cy.wait(2*1000)
        cy.get(':nth-child(3) > .preview-link > h1').click()
        cy.wait(2*1000)
        cy.get('.btn-outline-danger').click()
        cy.log('article succesfully deleted')
    });

    it('check the tag welcome and mark it favourite', () => {
        cy.get('.sidebar > .tag-list > :nth-child(2)').click()
        cy.wait(2*1000)
        cy.get('.feed-toggle > .nav > :nth-child(3) > .nav-link').contains('welcome')
        cy.get('.btn').click()
        cy.get(':nth-child(4) > .nav-link').click()
        cy.get('.articles-toggle > .nav > :nth-child(2) > .nav-link').click()
        cy.get('.article-preview').contains('welcome')
    });

    it('go to profile and logout', () => {
        cy.get('.col-xs-12 > .btn').click()
        cy.get('.col-xs-12 > .btn').click()
        cy.wait(2000)
        cy.get('.logo-font').should('exist')
    })


})