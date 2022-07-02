/// <reference types="Cypress"/>

describe('Test Suite 1', () => {
    it('Test 1', ()=>{
        //using the baseUrl(google.com) from the cypress.config.js file
        cy.visit('/')

        //we can use this command in order to store log  in console log
        cy.url().then((value) => {
            cy.log("Current url value", value)
        })

        //do not use this below command as it will not return the current url
        //cy.log("Current url value", cy.url())

        cy.get('.gLFyf').type('Hello World{enter}')

        //explicit wait command 
        //cy.wait(5000)

        // cy.pause() is used to pause the cypress code execution and allow to interact with the application
        // cy.pause()

        // cy.debug()
        //cy.debug()


        //use of contains command, this will click the Videos if present from the top
        // cy.contains('Videos', {timeout: 10*1000}).click()
        cy.contains('Videos').click()


        //log example
        cy.log('Checking for url that contain Hello+')

        // cy.url() command example
        cy.url().should('contain', 'Hello+')

        //cy.go() example 
        cy.go("back")

        //use of a testing library command
        cy.findByAltText('Google').should('exist')
        
    })
})