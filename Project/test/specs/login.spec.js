const { expect } = require('@wdio/globals')
const LoginPage = require('../pages/login.page')
const MenuPage = require('../pages/menu.page')
const PopUpPage = require('../pages/pop-up.page')
const MessagesPage = require('../pages/messages.page')
const testData = require('../../data/testData.json')

describe('Login test', () => {
    beforeEach(async() => {
        await driver.execute('mobile: terminateApp', { 'appId': 'com.wdiodemoapp'});
        await driver.execute('mobile: activateApp', { 'appId': 'com.wdiodemoapp'});
        await MenuPage.login()
    })

    it('should login with valid credentials', async() => {
        const {email, password} = testData.validLogin
        await LoginPage.login(email, password)
        await expect(PopUpPage.getPopUpText('Success')).toBeExisting()
    })

    it('shouldnt allow to login once the fields are blank', async() => {
        await LoginPage.login('', '')
        await expect(MessagesPage.messageText("Please enter a valid email address"))
        await expect(MessagesPage.messageText("Please enter at least 8 characters"))
    })
})

