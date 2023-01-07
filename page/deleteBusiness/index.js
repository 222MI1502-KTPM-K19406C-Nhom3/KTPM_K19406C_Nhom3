const { I } = inject()

const homePageLocator = require('../homepage/locator')
const customMethod = require('../../utils/customMethod');
const timeout = require('../common/timeout')

module.exports = {
    deleteBusiness(tenDN) {
        I.waitForElement(homePageLocator.menu.settingTab);
        customMethod.clickElement(homePageLocator.menu.settingTab);
        I.waitForElement(homePageLocator.menu.settingTab,timeout.loading_element);
        customMethod.clickElement(homePageLocator.menu.thietLapKhacTab);
        I.waitForElement(homePageLocator.home.deleteBusinessDropdown, timeout.loading_element)
        I.click(homePageLocator.home.deleteBusinessDropdown)
        I.waitForElement(homePageLocator.home.deleteBusinessButton, timeout.loading_element)
        I.click(homePageLocator.home.deleteBusinessButton)
        I.waitForElement(homePageLocator.home.deleteBusinessInput, timeout.loading_edit)
        I.fillField(homePageLocator.home.deleteBusinessInput, tenDN)
        I.waitForElement(homePageLocator.home.confirmButton, timeout.loading_element)
        I.click(homePageLocator.home.confirmButton)
    },
}