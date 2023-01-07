const { I } = inject()

const loginLocator = require('./locator')
const homepageLoator = require('../homepage/locator')
const timeout = require('../common/timeout')

module.exports = {
    login(url, email, password) {
        I.amOnPage(url)
        I.fillField(loginLocator.emailField, email)
        I.fillField(loginLocator.passwordField, password)
        I.click(loginLocator.loginButton)
        I.waitForElement(homepageLoator.menu.dangxuatText, timeout.loading)
    },

}