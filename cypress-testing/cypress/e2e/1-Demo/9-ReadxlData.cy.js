/// <reference types="Cypress"/>

describe('Sign in test suite', () => {
    it('open the website', () => {
        cy.visit('https://react-redux.realworld.io/')
        
    })

    it('sign in using the data from json file converted from excel', () => {
         // getting the sign in form
         cy.get(':nth-child(2) > .nav-link').click()

        // now extracting the data from the json fixture file and put in input fields
        cy.fixture('signin.json').then(signindata => {

            // for fetching the multiple data we are using the foreach loop to extract the data
            signindata.forEach(_signindata => {

                // calling the custom commands for signin
                cy.signin(_signindata.email, _signindata.pass)

                // without using the custom commands to enter signup data
                // cy.get(':nth-child(1) > .form-control').clear().type(_signindata.email)
                // cy.get(':nth-child(2) > .form-control').clear().type(_signindata.pass)
                // cy.get('.btn').click()

                // waiting for the page to load fully 
                cy.wait(2000)   


                // now checking which signin data is correct and successfully signed into the account
                cy.get('body').then(($body) => {
                    if ($body.find('h1:contains(Sign In)').length > 0) {
                        cy.log(`Sign in Failed with email:${_signindata.email} & Password:${_signindata.pass}`)
                    }
                    else {
                        cy.log(`Sign in Passed  with email:${_signindata.email} & Password:${_signindata.pass}`)
                    }
                })
            })
            
        })


    });
})