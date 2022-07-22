const xlsx = require('xlsx')
const fs = require('fs')

// This is a script for reading data from local file
// read data from excel file and store it into json

// Step 01- Locate excel file to Read its data
const excel_file = xlsx.readFile("A:/XORD/Cypress/Cypress-learning/cypress-testing/cypress/fixtures/login.xlsx")

// Step 02- now check numbers of sheets with name in that excel file
const getting_sheetnames = excel_file.SheetNames
console.log(getting_sheetnames)

// Step 03- select specific sheet from that file, all data will also be selected
const excelsheet1 = excel_file.Sheets['Sheet1']
// console.log("Sheet Name", excelsheet1)

// Step 04- now convert the sheet data from excel to json
const sheet1data = xlsx.utils.sheet_to_json(excelsheet1, {raw: false})
console.log("Sheet Data in JSON", sheet1data)

// Step 05- now write converted data to json file by stringifying the data
fs.writeFileSync('A:/XORD/Cypress/Cypress-learning/cypress-testing/cypress/fixtures/excel-login.json', JSON.stringify(sheet1data, null, 2))
console.log('Successfully Created jSON File')