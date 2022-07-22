/// <reference types="Cypress"/>

describe('signup test suite', () => {
    let old_url;
    it('open the website', () => {
        cy.visit('https://react-redux.realworld.io/', {failOnStatusCode: false})
        
    })

    it.skip('signup using the array data', () => {
        // getting the signup form
        cy.get(':nth-child(3) > .nav-link').click()

        // data set for signup
        let signdata = [
            {
                "userName": "tester",
                "email": "hello@cypress.io",
                "pass": "tester"
            },
            {
                "userName": " ",
                "email": "hello21@cypress.io",
                "pass": "tester"
            },

            {
                "userName": "tester123546",
                "email": " ",
                "pass": "tester"
            },

            {
                "userName": "biaqa",
                "email": "caa@cyps.io",
                "pass": " "
            },
            {
                "userName": "beaaf",
                "email": "luoakkk@sku",
                "pass": "letsdoit"
            }
        ]

        // now extracting the data from the array and put in input fields
        signdata.forEach(element => {
            cy.signup(element.userName, element.email, element.pass)
            cy.wait(2000)
            // cy.contains('Your Feed').should('not.exist')

            // the problem is cypress commands are running before executing the conditional js
            cy.get('body').then(($body) => {
                // cy.log($body.find('h1:contains(Sign Up)').length)

                if ($body.find('h1:contains(Sign Up)').length > 0) {
                    cy.log(`Sign up Failed with userName:${element.userName} & email:${element.email} & Password:${element.pass}`)
                }
                else {
                    cy.log(`Sign up Passed  with userName:${element.userName} & email:${element.email} & Password:${element.pass}`)
                }
            })
        });

    })

    it('signup using the data from fixtures', () => {
        // getting the signup form
        cy.get(':nth-child(3) > .nav-link').click()

        // now extracting the data from the json fixture file and put in input fields
        cy.fixture('signup.json').then(signupdata => {

            // for fetching the multiple data we are using the foreach loop to extract the data
            signupdata.forEach(_signupdata => {

                // calling the custom commands for signup
                cy.signup(_signupdata.userName, _signupdata.email, _signupdata.pass)

                // without using the custom commands to enter signup data
                // cy.get(':nth-child(1) > .form-control').clear().type(_signupdata.userName)
                // cy.get(':nth-child(2) > .form-control').clear().type(_signupdata.email)
                // cy.get(':nth-child(3) > .form-control').clear().type(_signupdata.pass)
                // cy.get('.btn').click()
                // cy.wait(2000)  


                // now checking which signup data is correct and successfully created account
                cy.get('body').then(($body) => {
                    if ($body.find('h1:contains(Sign Up)').length > 0) {
                        cy.log(`Sign up Failed with userName:${_signupdata.userName} & email:${_signupdata.email} & Password:${_signupdata.pass}`)
                    }
                    else {
                        cy.log(`Sign up Passed  with userName:${_signupdata.userName} & email:${_signupdata.email} & Password:${_signupdata.pass}`)
                    }
                })
            })
            
        })
    }); 

})