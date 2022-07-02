/// <reference types="Cypress"/>

describe('Test Suite', () => {

    //test case # 01
    // it('Test Case 01', () => {
    //     cy.visit('http://testhtml5.vulnweb.com/#/popular')

    //     //click the login button
    //     cy.get('.pull-right > .btn').click()

    //     //click the login submit button
    //     cy.get('#loginFormSubmit').click()

    //     //clicking the archieved from menu section
    //     cy.get(':nth-child(5) > a').click()

    //     //wait command
    //     cy.wait(5000)

    //     //clicking the logout button
    //     cy.get('.pull-right > a', {timedout: 6000}).click()
    // })

    //test case # 02
    // it('Learning Implicit Assertion', () => {
    //     cy.visit('https://example.cypress.io/commands/querying')

    //     //below are different types of implicit assertions
    //     cy.get('#query-btn')
    //         .should('contain', 'Button')
    //         .should('have.class', 'query-btn')
    //         .should('have.id', 'query-btn')
    //         .should('be.visible')
    //         .invoke('attr', 'id').should('equal', 'query-btn')
    // })

    //test case # 03
    // we can use .only with 'it' command if we want to run only that particular testcase.
    // it('Learning Explicit Assertion', () => {
    //     // below are different types of explicit assertions
    //     let name='aqib'
    //     expect(name).to.be.a('String')
    //     expect(name).to.be.equal('aqib')
    //     assert.equal(name, 'aqiib')
    // })
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// use of before, beforeEach, after, afterEach
describe('Test Suite 02', () => {
    // auth token for codedamn login site
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1lc3NhZ2VzdXBwcnQiLCJfaWQiOiI2MmJkNGE2MjZjNGY2MTAwMDkzMWIwZWMiLCJuYW1lIjoiTWVzc2FnZSBTdXBwb3J0IiwiaWF0IjoxNjU2NTcyNTE2LCJleHAiOjE2NjE3NTY1MTZ9.hPJ4Tf92co2shEA1hcJxnwWVqs29nMo15cpOvf5T9Lg'
    
    // use of before 
    // before(() => {
    //     cy.visit('https://codedamn.com/')
    //     // setting the localstorage var for login
    //     cy.then(() => {
    //         cy.log('setting the auth token value in local storage')
    //         window.localStorage.setItem('__auth__token', token)
    //     })
    // })
    

    // use of beforeEach, this will run after 'before'
    // beforeEach(() => {
    //     // cy.viewport('ipad-mini')
    // })


    // test case  01 
    // login to the codedamn
    //trying to visit the public profile of codedamn
    // it('Visiting codedamn', () => {

    //     //getting the current url
    //     cy.url().then((value) => {
    //         cy.log('The current url is = ', value)
    //     })

    //     cy.wait(20000)
    //     cy.get(':nth-child(3) > .flex-shrink-0 > :nth-child(1) > #user-menu > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"] > .rounded-full').click()
        
    //     //clicking the public profile menu item
    //     // removing the target as it is opening link in new tab that cypress is not supporting
    //     cy.get(':nth-child(3) > .flex-shrink-0 > .max-w-none > [href="/user/messagesupprt"]').invoke('removeAttr', 'target').click()
        
    //     // verifying the public profile page url
    //     cy.url({timeout: 20000}).should('contain', '/user/messagesupprt')
    // })

    
})
