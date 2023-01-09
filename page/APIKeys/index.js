const { I } = inject()

const APILocator = require('./locator')
const customMethod = require('../../utils/customMethod');
const timeout = require('../common/timeout');
const homePageLocator = require('../homepage/locator')


module.exports = {
    createAPI(apiKeys) {
     
        //create
        I.waitForElement(APILocator.settingTab, timeout.loading_element)
        customMethod.clickElement(APILocator.settingTab);
        I.waitForElement(APILocator.APIKeysTab, timeout.loading_element)
        customMethod.clickElement(APILocator.APIKeysTab);
        I.waitForElement(APILocator.createAPIButton, timeout.loading_element)
        customMethod.clickElement(APILocator.createAPIButton);
        I.waitForElement(APILocator.APIField, timeout.loading_element)
        customMethod.fieldValue(APILocator.APIField, apiKeys);
        I.waitForElement(APILocator.createANewAPIButton, timeout.loading_element)
        customMethod.clickElement(APILocator.createANewAPIButton);
        I.waitForElement(APILocator.finishButton, timeout.loading_element);
        customMethod.clickElement(APILocator.finishButton);
        I.waitForElement(APILocator.apiText, timeout.loading_element)
        I.see(apiKeys, APILocator.apiText)
       
    },

    editAPI(apiEditKeys){
        //edit
        I.waitForElement(APILocator.editAPIButton, timeout.loading_element);
        customMethod.clickElement(APILocator.editAPIButton);
        I.waitForElement(APILocator.apiEditField, timeout.loading_element);
        customMethod.fieldValue(APILocator.apiEditField, apiEditKeys);
        I.waitForElement(APILocator.saveChangeButton, timeout.loading_element);
        customMethod.clickElement(APILocator.saveChangeButton);
    },

    deleteAPI(){
    //delete
    I.waitForElement(APILocator.deleteButton, timeout.loading_element)
    I.click(APILocator.deleteButton)
    I.waitForElement(APILocator.agreeButton, timeout.loading_element)
    I.click(APILocator.agreeButton)
    I.waitForElement(APILocator.batDauKhoiTaoApiKeyText, timeout.loading_element)
    I.see('Bắt đầu khởi tạo API Key', APILocator.batDauKhoiTaoApiKeyText)
    }


    }
