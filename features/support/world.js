const { setWorldConstructor } = require('cucumber')
const { expect } = require('chai')
const puppeteer = require('puppeteer')

const HOME_PAGE = 'http://localhost:3000/'

class AddressBookWorld {
  constructor() {}

  async openHomePage() {
    this.browser = await puppeteer.launch()
    this.page = await this.browser.newPage()
    await this.page.goto(HOME_PAGE)
  }

  async closeHomePage() {
    await this.browser.close()
  }

  async pageHasTextContent(content, occurrence_count) {
    const page_content = await this.page.content()
    const actual_occurrence = page_content.match(content).length
    expect(actual_occurrence).to.be.eq(occurrence_count)
  }
}

setWorldConstructor(AddressBookWorld)
