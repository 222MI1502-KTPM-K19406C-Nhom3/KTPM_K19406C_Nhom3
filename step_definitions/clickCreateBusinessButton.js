const { I } = inject();
const createBusinessFunction = require('../page/portfolio/index')
const createBusinessLocator = require('../page/portfolio/locator')

Given('I click on create business button', async() => {
    createBusinessFunction.createBusiness(createBusinessLocator.url)
})