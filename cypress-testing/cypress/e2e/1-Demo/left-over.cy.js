/// <reference types="Cypress"/>

describe('Test Suite 01', () => {
    before(() => {
        cy.visit('https://example.cypress.io/commands/actions')
    })
    // it('use of type command', () => {
    //     // cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com')

    //     //use of delay in typing 
    //     // cy.get('.action-email').type('slow.typing@email.com', { delay: 100 })

    //     // .type() with special character sequences
    //     cy.get('.action-email').type('{del}{selectall}{backspace}')

    // })

    // it('use of force true command', () => {
    //     cy.get('.action-disabled')
    //     // Ignore error checking prior to type
    //     // like whether the input is visible or disabled
    //     .type('disabled error checking', { force: true })
    //     .should('have.value', 'disabled error checking')
    // })

    // it('use of focus command', () => {
    //     // use of focus(), return the focused element.
    //     // also perform action on that focus element.
    //     cy.get('.action-focus').focus()
    //         .should('have.class', 'focus')
    //         .prev().should('have.attr', 'style', 'color: orange;')
    // })

    // it('use of blur command', () => {
    //     // use of blur(), prev() immediate previous element 
    //     // blur is opposite to focus.
    //     // blur mean after focusing the element perform action then blur that element means move the cursor.
    //     cy.get('.action-blur').type('About to blur').blur()
    //         // .should('have.class', 'error')
    //         // .prev().should('have.attr', 'style', 'color: red;')
    // })


    // it('use of clear command', () => {
    //     // To clear on a DOM element, use the .clear() command.
    //     cy.get('.action-clear').type('Clear this text')
    //         .should('have.value', 'Clear this text').wait(5000)
    //         .clear()
    //         //.should('have.value', '') 

    // })


    // it('use of submit command', () => {
    //     // To clear on a DOM element, use the .submit() command.
    //     // immediate next element in DOM
    //     cy.get('.action-form')
    //         .find('[type="text"]').type('HALFOFF')
    //         cy.get('.action-form').submit()
    //         .next().should('contain', 'Your form has been submitted!')

    // })

    // it('use of submit command', () => {
    //     // To submit a form on a DOM element, use the .submit() command.
    //     // immediate next element in DOM
    //     cy.get('.action-form')
    //         .find('[type="text"]').type('HALFOFF')
    //         cy.get('.action-form').submit()
    //         .next().should('contain', 'Your form has been submitted!')

    // })


    // it('use of click command', () => {
    //     // cy.get('.action-btn').click()

    //     // clicking in the center of the element is the default
    //     cy.get('#action-canvas').click()

    //     cy.get('#action-canvas').click('topLeft')
    //     cy.get('#action-canvas').click('top')
    //     cy.get('#action-canvas').click('topRight')
    //     cy.get('#action-canvas').click('left')
    //     cy.get('#action-canvas').click('right')
    //     cy.get('#action-canvas').click('bottomLeft')
    //     cy.get('#action-canvas').click('bottom')
    //     cy.get('#action-canvas').click('bottomRight')

    // })


    // it('use of click command using custom x & y axis', () => {
    //     // .click() also work with  x and y coordinate
    //     // that controls where the click occurs
    //     cy.get('#action-canvas')
    //         .click(80, 75)
    //         .click(170, 75)
    //         .click(80, 165)
    //         .click(100, 185)
    //         .click(125, 190)
    //         .click(150, 185)
    //         .click(170, 165)
    // })


    // it('use of mulitple true', () => {
    //     // click multiple elements by passing multiple: true
    //     cy.get('.action-labels>.label').click({ multiple: true })
    // })


    // it('use of dblclick', () => {
    //     // To double click a DOM element, use the .dblclick() command.
    //     cy.get('.action-div').dblclick().should('not.be.visible')
    //     cy.get('.action-input-hidden').should('be.visible')
    // })


    // it('use of right click', () => {
    //     //To right click a DOM element, use the .rightclick() command.
    //     cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
    //     cy.get('.rightclick-action-input-hidden').should('be.visible')
    // })

    // it('use of trigger and invoke click', () => {
    //     // To trigger an event on a DOM element, use the .trigger() command.
    //     cy.get('.trigger-input-range')
    //         .invoke('val', 25)
    //         .trigger('change')
    //         .get('input[type=range]').siblings('p')
    //         .should('have.text', '25')
    // })


    // it('use of trigger and invoke click', () => {
    //     // To trigger an event on a DOM element, use the .trigger() command.
    //     cy.get('.trigger-input-range')
    //         .invoke('val', 25)
    //         .trigger('change')
    //         .get('input[type=range]').siblings('p')
    //         .should('have.text', '25')
    // })


    // it('use of check command', () => {
    //     // By default, .check() will check all
    //     // matching checkbox or radio elements in succession, one after another
    //     // cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]')
    //     //     .check().should('be.checked')

    //     // cy.get('.action-radios [type="radio"]').not('[disabled]')
    //     //     .check().should('be.checked')

    //     // // .check() accepts a value argument
    //     // cy.get('.action-radios [type="radio"]')
    //     //     .check('radio1').should('be.checked')

    //     // // .check() accepts an array of values
    //     // cy.get('.action-multiple-checkboxes [type="checkbox"]')
    //     //     .check(['checkbox1', 'checkbox2']).should('be.checked')

    //     // // Ignore error checking prior to checking
    //     // cy.get('.action-checkboxes [disabled]')
    //     //     .check({ force: true }).should('be.checked')

    //     // cy.get('.action-radios [type="radio"]')
    //     //     .check('radio3', { force: true }).should('be.checked')
    // })


    // it('use of uncheck commands', () => {
    //     // By default, .uncheck() will uncheck all matching
    //     // checkbox elements in succession, one after another
    //     // cy.get('.action-check [type="checkbox"]')
    //     //     .not('[disabled]')
    //     //     .uncheck().should('not.be.checked')

    //     // // .uncheck() accepts a value argument
    //     // cy.get('.action-check [type="checkbox"]')
    //     //     .check('checkbox1')
    //     //     .uncheck('checkbox1').should('not.be.checked')

    //     // // .uncheck() accepts an array of values
    //     // cy.get('.action-check [type="checkbox"]')
    //     //     .check(['checkbox1', 'checkbox3'])
    //     //     .uncheck(['checkbox1', 'checkbox3']).should('not.be.checked')

    //     // // Ignore error checking prior to unchecking
    //     // cy.get('.action-check [disabled]')
    //     //     .uncheck({ force: true }).should('not.be.checked')
    // })


    // it('use of select commands', () => {
    // at first, no option should be selected
    // cy.get('.action-select')
    //     .should('have.value', '--Select a fruit--')

    // Select option(s) with matching text content
    // cy.get('.action-select').select('apples')
    // // confirm the apples were selected
    // // note that each value starts with "fr-" in our HTML
    // cy.get('.action-select').should('have.value', 'fr-apples')

    // cy.get('.action-select-multiple')
    //     .select(['apples', 'oranges', 'bananas'])
    //     // when getting multiple values, invoke "val" method first
    //     .invoke('val')
    //     .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])

    // // Select option(s) with matching value
    // cy.get('.action-select').select('fr-bananas')
    //     // can attach an assertion right away to the element
    //     .should('have.value', 'fr-bananas')

    // cy.get('.action-select-multiple')
    //     .select(['fr-apples', 'fr-oranges', 'fr-bananas'])
    //     .invoke('val')
    //     .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])
    // // assert the selected values include oranges
    // cy.get('.action-select-multiple')
    //     .invoke('val').should('include', 'fr-oranges')

    // })


    // it('use of select commands', () => {
        // cy.get('#scroll-horizontal button')
        //     .should('not.be.visible')

        // scroll the button into view, as if the user had scrolled
        // cy.get('#scroll-horizontal button').scrollIntoView()
        //     .should('be.visible')

        // cy.get('#scroll-vertical button')
        //     .should('not.be.visible')

        // Cypress handles the scroll direction needed
        // cy.get('#scroll-vertical button').scrollIntoView()
        //     .should('be.visible')

        // cy.get('#scroll-both button')
        //     .should('not.be.visible')

        // // Cypress knows to scroll to the right and down
        // cy.get('#scroll-both button').scrollIntoView()
        //     .should('be.visible')

    // })


    it('use of select commands', () => {
        // if you chain .scrollTo() off of cy, we will
        // scroll the entire window
        cy.scrollTo('bottom').wait(5*1000)

        // cy.get('#scrollable-horizontal').scrollTo('right')

        // // or you can scroll to a specific coordinate:
        // // (x axis, y axis) in pixels
        // cy.get('#scrollable-vertical').scrollTo(250, 250)

        // // or you can scroll to a specific percentage
        // // of the (width, height) of the element
        // cy.get('#scrollable-both').scrollTo('75%', '25%')

        // // control the easing of the scroll (default is 'swing')
        // cy.get('#scrollable-vertical').scrollTo('center', { easing: 'linear', duration: 20*1000 })

        // // control the duration of the scroll (in ms)
        // cy.get('#scrollable-both').scrollTo('center', { duration: 5*1000 })

    })

})