const { I } = inject();
const businessNameFunction = require('../page/verify_businessName/index')
const businessNameLocator = require('../page/verify_businessName/locator')

Given('I view business name', async() => {
    businessNameFunction.viewCreationPage();

})