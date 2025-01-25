const { expect } = require('@wdio/globals')
const LoginPage = require('../pages/login.page')
const MenuPage = require('../pages/menu.page')
const PopUpPage = require('../pages/pop-up.page')
const testData = require('../../data/testData.json')

describe('Sample test', () => {
    it('should login with valid credentials', async() => {
        const {email, password} = testData.validLogin
        await MenuPage.login()
        await LoginPage.login(email, password)
        await expect(PopUpPage.getPopUpText('Success')).toBeExisting()
    })
})

