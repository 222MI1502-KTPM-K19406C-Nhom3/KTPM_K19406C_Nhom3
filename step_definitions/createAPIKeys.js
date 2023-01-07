const testAPIFunction = require('../page/APIKeys/index');
const MyVariable = require('../page/common/variable');

Given('I create a new API key', async() => {
    testAPIFunction.createAPI(MyVariable.APIName);
    testAPIFunction.editAPI(MyVariable.editAPIName);
    testAPIFunction.deleteAPI();
})
