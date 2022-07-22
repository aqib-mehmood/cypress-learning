/// <reference types="Cypress"/>

describe('Publishing Article test suite', () => {
    const auth_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1a2FzQHVrcyIsInVzZXJuYW1lIjoibG92ZWx5IiwiaWF0IjoxNjU3NTMyMTI5LCJleHAiOjE2NjI3MTYxMjl9.2PPODpMqalZ9gLAWAGQfgz179JBaRF1C0omWK9w9JwA'
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

        // waiting for the page to fully loaded
        cy.wait(2 * 1000)

        // checking the your feed to know we are logged in
        cy.get('.feed-toggle > .nav > :nth-child(1) > .nav-link').should('exist')

        // clcking the new post to open the form to add a post
        cy.contains('New Post').click()
    });

    it.skip('publish article using array data', () => {

        // this is using the array method
        let articledata = [
            {
                "title": "TTis is one Article as a no Oneeeeee",
                "about": "This is all about article number Oneee",
                "body": "body body body",
                "tags": "welcome"
            },
            {
                "title": "NNw Article as a no tewoooe",
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
                "title": "Ne Arrticle no fourerr",
                "about": "This is all about article number fourrr",
                "body": "body body body",
                "tags": "introduction"
            },
            {
                "title": "NeArticle noo fiveeee",
                "about": "This is all about article number fiveee",
                "body": "body body body",
                "tags": "introduction"
            },
            {
                "title": "New Articlnoo sixexx",
                "about": "This is all about article number sixxx",
                "body": "body body body",
                "tags": "welcome"
            },
            {
                "title": "New Artic noo seevennn",
                "about": "This is all about article number sevennn",
                "body": "body body body",
                "tags": "introduction"
            },
            {
                "title": "New Arti no eeighttt",
                "about": "This is all about article number eightttt",
                "body": "body body body",
                "tags": "introduction"
            },
            {
                "title": "New  no ninee",
                "about": "This is all about article number ninnee",
                "body": "body body body",
                "tags": "welcome"
            },

            {
                "title": "Neww Article no tnn",
                "about": "This is all about article number tennnn",
                "body": "body body body",
                "tags": "introduction"
            }
        ]

        // now extracting the data from the array and put in input fields
        articledata.forEach(element => {

            // using the custom commands 
            // in order to execute this you have to comment out the withou custom commnds code
            cy.publisharticle(element.title, element.about, element.body, element.tags)

            // without using the cusotm commands
            // cy.findByPlaceholderText('Article Title').type(element.title)
            // cy.findByPlaceholderText('What\'s this article about?').type(element.about)
            // cy.findByPlaceholderText('Write your article (in markdown)').type(element.body)
            // cy.findByPlaceholderText('Enter tags').type(element.tags)
            // cy.contains('Publish Article').click()

            // waiting for the article to publish
            cy.wait(5 * 1000)

            // checking the comment to know if the article published or not
            cy.contains('Post Comment').should('exist')
            cy.log('Article Successfully Published')

            // returning to the add article page
            cy.get(':nth-child(2) > .nav-link').click()
        });
    });
    
    it('publish article using data from fixtures', () => {
        // now using the data from the fixture article.json to get the data
        cy.fixture('article.json').then(articledata => {

            // using the foreach loop to iterate over the data
            articledata.forEach(_articledata => {
                // now using custom commands and data from fixture publishing the article
                cy.publisharticle(_articledata.title, _articledata.about, _articledata.body, _articledata.tags)

                // waiting for the article to publish
                cy.wait(5 * 1000)

                // checking the comment to know if the article published or not
                cy.contains('Post Comment').should('exist')
                cy.log('Article Successfully Published')

                // returning to the add article page
                cy.get(':nth-child(2) > .nav-link').click()
            });
        })
    });
   
    // now checking the published article
    it('Check the published article in the profile my article section', () => {
        cy.get(':nth-child(4) > .nav-link').click()
        cy.scrollTo('bottom', { duration: 5 * 1000 })
    })
})