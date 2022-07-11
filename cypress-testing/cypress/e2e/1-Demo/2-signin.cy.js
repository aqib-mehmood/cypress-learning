/// <reference types="Cypress"/>

describe('Sign in test suite', () => {
    let old_url;
    it('open the website', () => {
        cy.visit('https://react-redux.realworld.io/')
        cy.url().then((val) => {
            old_url = val
        })
    })

    it('open the singin page and enter credentials', () => {
        cy.get(':nth-child(2) > .nav-link').click()

        // data set for sign in
        let signindata = [
            {
                "email": " ",
                "pass": " "
            },
            {
                "email": "hello21@cypress.io",
                "pass": " "
            },

            {
                "email": " ",
                "pass": "letsdoit"
            },

            {
                "email": "tester",
                "pass": "letsdoit"
            },
            {
                "email": "lukas@uks",
                "pass": "letsdoit"
            }
        ]

        // now extracting the data from the array and put in input fields
        signindata.forEach(element => {
            cy.get(':nth-child(1) > .form-control').clear().type(element.email)
            cy.get(':nth-child(2) > .form-control').clear().type(element.pass)
            cy.get('.btn').click()


            // the problem is cypress commands are running before executing the conditional js
            //     cy.get('body').then(($body) => {
            //         cy.log($body.find('h1:contains(Sign Up)').length)

            // if ($body.find('h1:contains(Sign Up)').length > 0) {
            //     cy.log(`Sign up Failed with userName:${element.userName} & email:${element.email} & Password:${element.pass}`)
            // }
            // else {
            //     cy.log(`Sign up Passed  with userName:${element.userName} & email:${element.email} & Password:${element.pass}`)
            // }
            //     })  
        });

        if(old_url == cy.url()){
            cy.log('Sign in Failed.. Try again')
        }
        else{
            cy.log('Sign in Passed.. Welcome')
        }

    })
})