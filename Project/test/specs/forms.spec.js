const { expect } = require('@wdio/globals')
const MenuPage = require('../pages/menu.page')
const FormsPage = require('../pages/forms.page')

describe('Sample test', () => {
    it('should login with valid credentials', async() => {
        input_field = 'anything'
        await MenuPage.forms()
        await FormsPage.forms(input_field)
        await expect(FormsPage.popUpSuccess).toBeExisting()
    })
})