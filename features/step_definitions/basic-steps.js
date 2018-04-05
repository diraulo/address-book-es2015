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
  return this.pageHasTextContent(content, 1)
})
