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
                "title": "Article lno Oneee",
                "about": "This is all about article number Oneee",
                "body": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
                "tags": "welcome"
            },
            {
                "title": "Article no twooo",
                "about": "This is all about article number twooo",
                "body": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
                "tags": "introduction"
            },

            {
                "title": "Article no threee",
                "about": "This is all about article number threee",
                "body": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
                "tags": "welcome"
            },

            {
                "title": "Article no fourrr",
                "about": "This is all about article number fourrr",
                "body": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
                "tags": "introduction"
            },
            {
                "title": "Article no fiveee",
                "about": "This is all about article number fiveee",
                "body": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
                "tags": "introduction"
            },
            {
                "title": "Article no sixxx",
                "about": "This is all about article number sixxx",
                "body": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
                "tags": "welcome"
            },
            {
                "title": "Article no sevennn",
                "about": "This is all about article number sevennn",
                "body": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
                "tags": "introduction"
            },
            {
                "title": "Article no eightttt",
                "about": "This is all about article number eightttt",
                "body": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
                "tags": "introduction"
            },
            {
                "title": "Article no ninnee",
                "about": "This is all about article number ninnee",
                "body": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
                "tags": "welcome"
            },
            
            {
                "title": "Article no tennnn",
                "about": "This is all about article number tennnn",
                "body": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
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
})