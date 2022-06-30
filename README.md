# cypress-learning
Cypress:
========
-- Cypress is a next-generation front-end testing tool built for the modern web. 
-- We make it possible to:
	-- Set up tests
	-- Write tests
	-- Run tests
	-- Debug Tests

-- Cypress is most often compared to Selenium; however, Cypress is both fundamentally and architecturally different. 
-- Cypress enables you to write faster, easier, and more reliable tests.


Cypress Setting up:
-------------------
-- Ceate a package inside an empty folder using "npm init -y".
-- Now install cypress using the command "npm i cypress"
-- After that now use the command to open cypress "npx cypress open"
-- Cypress will open and you need to select the desire browser.
-- After that in VS code you can add a test file in the format "fileName.cy.js" under the e2e folder.
-- At the top of each file mention "/// <reference types="Cypress"/>" for autocompleting.
-- Now you can write the test cases in the same syntax as the chai mocha.
-- Use this command ""watchForFileChanges": true" in the "cypress.json" to terminate the auto running of cypress test upon saving file.

Element locator or Selector Playground:
---------------------------------------
-- Jis tarha inspect may hum element ko select krty hain ya hover krty hain aur uski detail show ho jati hain same yhan b us element ki id utha lety hian.

Custom timeout at command level:
--------------------------------
-- We can add a custom timeout at command level by using the command "cy.get('className, {timeout: 6000}').click()"
-- Cypress may jou default timeout ha woh 4second ka ha hum usko change kr skty hain at command level as well as global level.
-- For global level we have to set the timeout in the cypress.json file using the command "defaultCommandTimeout" : 500


cy.contains:
-----------
-- this command is used to find the element having the text in the contain method.
-- This will help in finding the element using the text not the css selectors.
-- cy.contains('videos').click()


cy.wait:
-------- 
-- This  command is used to hardcode the wait and is used as a standalone command.
-- This is not used with the command but used seperately.
-- cy.wait(5000)

Assertion in Cypress:
----------------------
-- Two types implicit and explicit.
-- Implicit assertion: In built assertion hoti hain. Should() & and() command in cypress.
-- Explicit assertion: Not in built assertion. For this we have to use specific assertion command like assert() or expect().


Implicit assertions:
--------------------
-- Should-contain	.should('contain', 'Button')

-- Should-have 		.should('have.class', 'className') 
			.should('have.text', 'textName') 
			.should('have.html', 'htmo'

-- Should-be 		.shuld('be.visible')
			.shuld('be.selected')
			.shuld('be.focused')

-- Should.eqaul 	.invoke('attr', 'id').should('equal', 'id-value')

-- and - is used to chaining the assertion.


Explicit assertion:
-------------------
-- let name='aqib'
        expect(name).to.be.a('String')
        expect(name).to.be.equal('aqib')
        assert.equal(name, 'aqiib')
-- These are similar as of chai mocha.


Page Object Model:
------------------
-- design principle, keep object and method seperate from test script.
-- No rocket science just to use oop concepts for code reusability.

Mochawesome Report Generator:
-----------------------------
-- use the command to install report generator "npm i mochawesome-report-generator".
-- The second library we will need is mochawesome-merge library.



























