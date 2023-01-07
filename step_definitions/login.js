const { I } = inject();
const email = 'ktpmk19406cnhom3@gmail.com'
const password = 'Ktpmk19406cnhom3'
const loginFunction = require('../page/login/index')
const loginLocator = require('../page/login/locator')

Given('I login to Casso page', async() => {
    loginFunction.login(loginLocator.url, email, password)
})