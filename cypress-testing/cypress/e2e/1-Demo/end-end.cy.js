/// <reference types="Cypress"/>

describe('Test Suite', () => {
    // it('Test Case 01', () => {
    //     cy.visit('http://testhtml5.vulnweb.com/#/popular')
    //     cy.get('.pull-right > .btn').click()
    //     cy.get('#loginFormSubmit').click()
    //     cy.get(':nth-child(5) > a').click()
    //     cy.wait(5000)
    //     cy.get('.pull-right > a', {timedout: 6000}).click()
    // })

    // it('Learning Implicit Assertion', () => {
    //     cy.visit('https://example.cypress.io/commands/querying')
    //     cy.get('#query-btn')
    //         .should('contain', 'Button')
    //         .should('have.class', 'query-btn')
    //         .should('have.id', 'query-btn')
    //         .should('be.visible')
    //         .invoke('attr', 'id').should('equal', 'query-btn')
    // })

    it('Learning Explicit Assertion', () => {
        // cy.visit('https://example.cypress.io/commands/querying')
        let name='aqib'
        expect(name).to.be.a('String')
        expect(name).to.be.equal('aqib')
        assert.equal(name, 'aqib')
        

    })
})
