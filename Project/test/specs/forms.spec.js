const { expect } = require('@wdio/globals')
const MenuPage = require('../pages/menu.page')
const FormsPage = require('../pages/forms.page')
const PopUpPage = require('../pages/pop-up.page')
const testData = require('../../data/testData.json')

describe('Forms test', () => {
    it('should login with valid credentials', async() => {
        const {input_field} = testData.validForms
        await MenuPage.forms()
        await FormsPage.forms(input_field)
        await expect(PopUpPage.getPopUpText('This button is active')).toBeExisting()
    })
})