/// <reference types="Cypress"/>

describe('Test Suite 1', () => {
    it('Test 1', ()=>{
        cy.visit('www.google.com')

        //we can use this command in order to store log  in console log
        cy.url().then((value) => {
            cy.log("Current url value", value)
        })

        //do not use this below command as it will not return the current url
        //cy.log("Current url value", cy.url())

        cy.get('.gLFyf').type('Hello world{enter}')

        //explicit wait command 
        //cy.wait(5000)

        //use of contains command, this will click the Videos if present from the top
        cy.contains('Videos').click()

        //log example
        cy.log('Checking for url that contain Hello+')

        // cy.url() command example
        cy.url().should('contain', 'Hello+')

        //cy.go() example 
        cy.go("back")
    })
})