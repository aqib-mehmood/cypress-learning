## Welcome to GitHub Pages

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

watchForFileChanges:
--------------------
-- Use this command ""watchForFileChanges": true" in the "cypress.json" to terminate the auto running of cypress test upon saving file.

Element locator or Selector Playground:
---------------------------------------
-- Jis tarha inspect may hum element ko select krty hain ya hover krty hain aur uski detail show ho jati hain same yhan b us element ki id utha lety hian.

Custom timeout at command level:
--------------------------------
-- We can add a custom timeout at command level by using the command "cy.get('className, {timeout: 6000}').click()"
-- we can also use the timeout as {timeout: 10 * 1000} means delay for 10 seconds.
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


How to Run Cypress Headless:
-----------------------------
-- This means we want to run cypress test in our console not in the browser.
-- Used when you are using CI/CD integration and dont have to interact with the browser.
-- For that we have to use the command "npx cypress run --headless"
-- It is recommended to use the browser way of testing not this headless way.

Fixtures folder:
----------------
-- Fixtures may hum json file ko add kr skty hain.
-- Fixtures k throug hum Data Driven testing kr skty hian by saving the data in the json format.
-- Fixtures ko hum test script may simple cy.fixture kr k call kr skty hain aur action perform kr skty hain.

Viewport in cypress:
-------------------
-- Is k through hum different viewport ko use kr skty hain for responsive testing.
-- cy.viewport(width,height) etc.
-- we can simulatneously use any viewport like desktop and mobile etc.

cy.go():
-------
-- there are multiple options to use with this command.
-- go back, forward etc.

cy.url():
--------
-- should return the current url you are at.
-- we can also do more things like should expect etc.


cy.log():
---------
-- is used to log the data on the cypress console.
-- Do not use cy.log("Current url value", cy.url()) instead of this we can use;
-- cy.url().then((value) => {
	cy.log("Current url value", value)
})


it.only:
--------
-- if we want to run only specific block of it or only specific test case then we can use .only with the 'it' command.

Hooks in Cypress:
==================
1- before:
-----------
-- Run one time before all test start.
-- In this we can set all the things that we need only once before all other work like login credential etc.
-- this block will run before all other commands.


2- beforeEach():
----------------
-- Run before each individual test start.
-- we can use this if we want to put something that is repetitive so put that in this block and it will run 
-- beforeEach( () => {
	//code will go here
})

-- In before each we can also set the login auth token so that we dont have to login again and again.
-- cy.then( () => {
            window.localStorage.setItem('token_variable_in_local_storage', value-of-token)
        })

3- after:
--------
-- Run one time after all the test finished.

4- afterEach:
-------------
-- Run after each individual test finished.



cy.pause():
-----------
-- this will pause the cypress code execution.
-- not pause the browser loading or behavior.


Cypress Plugin:
----------------
-- we can use different plugins in cypress to improve or enhance cypress functionality.
-- One the very useful plugin is cypress-testing-library that is available at https://github.com/testing-library/cypress-testing-library
-- go to the documentation and checkout the guide on how to install this.
-- this plugin enhanced the cy command in cypress.
-- for example cy.findBy and findAllBy anything.
-- after installing the plugin must import the plugin in the commands.js file as we are using the custom commands.


Environment variable:
---------------------
-- we can set environment variable in the file cypress.config.js
-- env var like we can set base-url.


Note about cypress and non-cypress commands:
---------------------------------------------
-- if we have non cypress commands like js code then it will not wait for the cypress commands to execute first. 
-- this means the non cypress commnads will run first.
-- cypress commands runs in a sequence and wait for the previos commands to complete then next will run.


Use of .then() to handle non-cypress promises:
-----------------------------------------------
-- we can use .then(), if we want to do something after the previous action completed.
-- cy.url().then((value) => {
	cy.log("Current url value", value)
})


delay: 100:
------------
-- Delay each keypress by 0.1 sec
  .type('slow.typing@email.com', { delay: 100 })


force: true:
-------------
-- we can use this to forcefully do something.
-- for example disable field may type krny k lie type ko force true krwana.


.blur():
---------
-- blur is opposite to focus.
-- blur means after performing action on the focused element call the blur inorder to move the cursor from that element.
-- matlab pehly me us field may likh skta tha ab ni likh skta etc.

.clear():
---------
-- To clear on a DOM element, use the .clear() command.


.prev() and .next():
--------------------
-- prev() gives immediate previous element.
-- next() gives immediate next element.


.submit():
----------
-- To submit a form on a DOM element, use the .submit() command.
-- For this we have to select the whole form and the find command to find elements and then we can submit the form using .submit().


.click(x,y):
------------
-- click() also work with  x and y coordinate
-- that controls where the click occurs


mulitple: true:
---------------
-- click multiple elements by passing multiple: true


.dblclick():
------------
-- To double click a DOM element, use the .dblclick() command.


rightclick():
--------------
-- To right click a DOM element, use the .rightclick() command.


trigger and invoke:
-------------------
-- To trigger an event on a DOM element, use the .trigger() command.


.check():
---------
-- To check a checkbox or radio, use the .check() command.
-- By default, .check() will check all
-- Matching checkbox or radio elements in succession, one after another
-- check() also accepts a value argument and check only that particular value element.
-- .check() accepts an array of values means multiple checks.


.uncheck():
-----------
-- To uncheck a checkbox or radio, use the .uncheck() command.
-- By default, .uncheck() will uncheck all matching


.select():
---------
-- To select an option in a select, use the .select() command.
-- when getting multiple values, invoke "val" method first


.scrollIntoView():
------------------
-- To scroll an element into view, use the .scrollintoview() command.
-- scroll the button into view, as if the user had scrolled using the .scrollIntoView().

cy.scrollTo():
--------------
-- To scroll the window or a scrollable element to a specific position, use the cy.scrollTo() command.
-- If we use only  cy.scrollTo('bottom') then the whole window will scroll to the bottom.
-- But if we use cy.get(element).scrollTo('bottom') then only this element will move to bottom.
-- or you can scroll to a specific coordinate: (x axis, y axis) in pixels
-- or you can scroll to a specific percentage of the (width, height) of the element
-- control the duration of the scroll (in ms) { duration: 5*1000 })


Use of multiple select drop down:
--------------------------------
-- For this purpose we will use the multiple with array of elements that we want to select.
-- .select(['apples', 'oranges', 'bananas'])


Use of multiple select hierarchal menu items:
----------------------------------------------
-- If the menu has hover property and open upon hovering the mouse then we will use invoke('show') method.
-- This will first show the menu and submenu and then click the link.


How to upload File:
-------------------
-- first of all use the command to install a library 'npm install --save-dev cypress-file-upload'
-- then import this in command.js 'import 'cypress-file-upload' 
-- now in order to upload the file put it under the fixture folder and give the name to the .attachfile('filename') method.
-- after that it depends on the functionality of the website how it handle the file.


How to select value in searchable dropdown:
-------------------------------------------
-- for this first of all check the current value in drop down.
-- click the drop down to expand.
-- now search for the value
-- if the value exist then select that value and then recheck the current value in drop down.

How to handle alerts:
---------------------
-- In cypress, alerts are handled by default so dont have to click ok on the prompt.
-- But in order to handle the confirmation box by inputting some text we have to handle this at our own.
-- we need to use the cy.on('window:confirm', call back function) to click on the cancel by returning the false.
-- In order to use the prompt alert we first calll the ct.on(window, call back with cy.stub().returns())


Task:
=====
Target website: https://react-redux.realworld.io/

Task 01: Write testcases for automation.
-- https://docs.google.com/spreadsheets/d/1LVkwbK4DX7WXLlhDlJoku2lAw5mBheCwITaSmomGC6Q/edit?usp=sharing

Task 02: Write test automation script with Cypress.
-- Signup
-- Login with different values for validation.
-- Edit your information.
-- Publish 10-15 articles using for loop.
-- Check what you have published is showing in your profile.
-- Mark Favourite and check it in your profile.
-- Navigate to different page using pagination.
-- Check Popular tags.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
