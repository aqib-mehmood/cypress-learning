/// <reference types="Cypress"/>

describe('Publishing Article test suite', () => {
    const auth_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1a2FzQHVrcyIsInVzZXJuYW1lIjoibG92ZWx5IiwiaWF0IjoxNjU3NTMyMTI5LCJleHAiOjE2NjI3MTYxMjl9.2PPODpMqalZ9gLAWAGQfgz179JBaRF1C0omWK9w9JwA'
    before(() => {
        cy.visit('https://react-redux.realworld.io/')
    })

    it('open the singin page and enter credentials', () => {
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get(':nth-child(1) > .form-control').clear().type('lukas@uks')
        cy.get(':nth-child(2) > .form-control').clear().type('letsdoit')
        cy.get('.btn').click()
        cy.wait(2*1000)
        cy.get('.feed-toggle > .nav > :nth-child(1) > .nav-link').should('exist')
        cy.contains('New Post').click()
    });

    it('go to publish articel form and enter data to publish it', () => {
        let articledata = [
            {
                "title": "This is one Article as a no Oneeeeee",
                "about": "This is all about article number Oneee",
                "body": "body body body",
                "tags": "welcome"
            },
            {
                "title": "Now Article as a no tewoooe",
                "about": "This is all about article number twooo",
                "body": "body body body",
                "tags": "introduction"
            },

            {
                "title": "New Article no threeeee",
                "about": "This is all about article number threee",
                "body": "body body body",
                "tags": "welcome"
            },

            {
                "title": "New Article no fourerr",
                "about": "This is all about article number fourrr",
                "body": "body body body",
                "tags": "introduction"
            },
            {
                "title": "New Article no fiveeee",
                "about": "This is all about article number fiveee",
                "body": "body body body",
                "tags": "introduction"
            },
            {
                "title": "New Article no sixexx",
                "about": "This is all about article number sixxx",
                "body": "body body body",
                "tags": "welcome"
            },
            {
                "title": "New Article no seevennn",
                "about": "This is all about article number sevennn",
                "body": "body body body",
                "tags": "introduction"
            },
            {
                "title": "New Article no eeightttt",
                "about": "This is all about article number eightttt",
                "body": "body body body",
                "tags": "introduction"
            },
            {
                "title": "New  Article no niinee",
                "about": "This is all about article number ninnee",
                "body": "body body body",
                "tags": "welcome"
            },
            
            {
                "title": "New Article no teeennn",
                "about": "This is all about article number tennnn",
                "body": "body body body",
                "tags": "introduction"
            }
        ]

        // now extracting the data from the array and put in input fields
        articledata.forEach(element => {
            cy.findByPlaceholderText('Article Title').type(element.title)
            cy.findByPlaceholderText('What\'s this article about?').type(element.about)
            cy.findByPlaceholderText('Write your article (in markdown)').type(element.body)
            cy.findByPlaceholderText('Enter tags').type(element.tags)
            cy.contains('Publish Article').click()
            cy.wait(5 * 1000)
            cy.contains('Post Comment').should('exist')
            cy.log('Article Successfully Published')
            cy.get(':nth-child(2) > .nav-link').click()
        });
    });

    it('Check the published article in the profile my article section', () => {
        cy.get(':nth-child(4) > .nav-link').click()
        cy.scrollTo('bottom', { duration: 5*1000 })
    })
})