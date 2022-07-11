/// <reference types="Cypress"/>

describe('signup test suite', () => {
    let old_url;
    it('open the website', () => {
        cy.visit('https://react-redux.realworld.io/')
        cy.url().then((val) => {
            old_url = val
        })
    })

    it('open the signup page and enter form data', () => {
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
                "userName": "lovely",
                "email": "lukas@uks",
                "pass": "letsdoit"
            }
        ]

        // now extracting the data from the array and put in input fields
        signdata.forEach(element => {
            cy.get(':nth-child(1) > .form-control').clear().type(element.userName)
            cy.get(':nth-child(2) > .form-control').clear().type(element.email)
            cy.get(':nth-child(3) > .form-control').clear().type(element.pass)
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
            cy.log('Signup Failed')
        }
        else{
            cy.log('Signup Passed')
        }

    })
})