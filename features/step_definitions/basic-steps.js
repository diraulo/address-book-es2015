const { After, Before, Given, Then } = require('cucumber')

// Before(async function(testCase) {
//   return await this.openHomePage()
// })

After(async function() {
  return await this.closeHomePage()
})

Given('I visit the site', async function() {
  return await this.openHomePage()
})

Then('I should see {string}', function(content) {
  return this.pageHasTextContent(content)
})

Then('I click {string}', async function(btnName) {
  return await this.clickButton(btnName)
})

Then('I fill in {string} with {string}', async function(field, content) {
  return await this.fillFormField(field.toLowerCase(), content)
})

Then('I should have {int} contact in my address book', async function(count) {
  return await this.checkNumberOfSavedContacts(count)
})
