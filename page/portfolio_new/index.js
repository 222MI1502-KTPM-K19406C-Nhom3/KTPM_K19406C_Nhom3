const { I } = inject()

const createLocator = require('./locator')
const MyVariable = require('../common/variable');
const customMethod = require('../../utils/customMethod');


module.exports = {
    create(businessWebsite, businessName, option) {
        customMethod.fieldValue(createLocator.businessWebsiteField, businessWebsite);
        customMethod.fieldValue(createLocator.businessNameField, businessName);
        customMethod.clickElement(option);
        customMethod.clickElement(createLocator.createButton)
    },

}
