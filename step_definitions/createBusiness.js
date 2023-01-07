const { I } = inject();

const createFunction = require('../page/portfolio_new/index')
const createLocator = require('../page/portfolio_new/locator')
const Myfunctions = require('../page/common/functions');
const MyVariable = require('../page/common/variable');

Given('I create a new business', async() => {
    createFunction.create(MyVariable.businessWebsite, MyVariable.businessName, createLocator.radioButton  + '[' + Myfunctions.randomNumber(1, 6) + ']')
})
