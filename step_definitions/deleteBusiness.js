const deleteBusiness = require('../page/deleteBusiness/index')
const businessName = 'K19406C_Nhom3'

Given('I delete business', () => {
    deleteBusiness.deleteBusiness(businessName)
})  