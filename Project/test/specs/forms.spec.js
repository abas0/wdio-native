const { expect } = require('@wdio/globals')
const MenuPage = require('../pages/menu.page')
const FormsPage = require('../pages/forms.page')
const PopUpPage = require('../pages/pop-up.page')
const testData = require('../../data/testData.json')

describe('Forms test', () => {
    beforeEach(async() => {   
        await driver.execute('mobile: activateApp', { 'appId': 'com.wdiodemoapp'})
        await MenuPage.forms()
    })

    afterEach(async() => {
        await driver.execute('mobile: terminateApp', { 'appId': 'com.wdiodemoapp'})
    })

    it('should open the active pop-up successfully', async() => {
        const {input_field} = testData.validForms
        await FormsPage.formsComplete(input_field)
        await expect(PopUpPage.getPopUpText('This button is active')).toBeExisting()
    })

    it('should validate the text result field', async() => {
        const {input_field} = testData.validForms
        await FormsPage.formsTextResult(input_field)
        await expect(FormsPage.inputTextResult).toHaveText(input_field)
    })
})