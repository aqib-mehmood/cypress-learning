/// <reference types="Cypress"/>

describe('Favourite Article test suite', () => {
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

    it('mark article as favourite', () => {
        cy.get(':nth-child(4) > .nav-link').click()
        cy.wait(2000)
        // cy.get(':nth-child(3) > .article-meta > .pull-xs-right > .btn').should('have.css', 'background-color', 'rgb(92, 184, 92)') // means marked favourite
        // cy.get('.btn-outline-primary').should('have.css', 'background-color').and('eq', 'rgb(242, 228, 125)')
        // cy.wait(2000)
        
        // let i = 1
        // for(i=1; i<4; i++){
        //     if(cy.get(':nth-child('+i+') > .article-meta > .pull-xs-right > .btn').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')){
        //         cy.log('in loop if')
        //         cy.get(':nth-child('+i+') > .article-meta > .pull-xs-right > .btn').click()
        //     }
        //     else{
        //         cy.log('in loop else')
                
        //     }
        // }
        
        cy.get(':nth-child(1) > .article-meta > .pull-xs-right > .btn').click()
        cy.wait(2000)
        cy.get(':nth-child(2) > .article-meta > .pull-xs-right > .btn').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > .article-meta > .pull-xs-right > .btn').click()
        cy.wait(2000)
    })

    it('Check the marked article in the profile favourite section', () => {
        cy.get(':nth-child(4) > .nav-link').click()
        cy.wait(2000)
        cy.get('.articles-toggle > .nav > :nth-child(2) > .nav-link').click()
        // cy.scrollTo('bottom', { duration: 5*1000 })
    })
})