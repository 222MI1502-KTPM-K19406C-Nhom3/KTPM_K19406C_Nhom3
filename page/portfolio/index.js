const { I } = inject()

const createBusinessLocator = require('./locator')
// const homepageLoator = require('../homepage/locator')
// const timeout = require('../common/timeout')

module.exports = {
    createBusiness() {
        I.click(createBusinessLocator.createBusinessButton)
    },

}