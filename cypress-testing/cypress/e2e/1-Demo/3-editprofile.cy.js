/// <reference types="Cypress"/>

describe('Edit Profile test suite', () => {
    // const auth_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1a2FzQHVrcyIsInVzZXJuYW1lIjoibG92ZWx5IiwiaWF0IjoxNjU3NTMyMTI5LCJleHAiOjE2NjI3MTYxMjl9.2PPODpMqalZ9gLAWAGQfgz179JBaRF1C0omWK9w9JwA'
    before(() => {
        cy.visit('https://react-redux.realworld.io/')
    })

    it('open the singin page and enter credentials', () => {
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get(':nth-child(1) > .form-control').clear().type('lukas@uks')
        cy.get(':nth-child(2) > .form-control').clear().type('letsdoit')
        cy.get('.btn').click()
    });

    it('go to profile setting and add bio', () => {
        cy.get('.feed-toggle > .nav > :nth-child(1) > .nav-link').should('exist')
        cy.contains('Settings').click()
        cy.findByPlaceholderText('Short bio about you').clear().type('This is my updated bio')
        cy.get('form > :nth-child(1) > .btn').click()
        cy.wait(1000)
        cy.get('.feed-toggle > .nav > :nth-child(1) > .nav-link').should('exist')
        cy.log('task complete bio updated')
    });
})