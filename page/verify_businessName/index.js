const { I } = inject()

const verifyBusinessNameLocator = require('./locator');
const customMethod = require('../../utils/customMethod');
const timeout = require('../common/timeout');

module.exports = {
    viewCreationPage() {
        customMethod.clickElement(verifyBusinessNameLocator.businessNameLabel)
        I.waitForElement(verifyBusinessNameLocator.businessNameLabel, timeout.loading_element);
    },

}