const { expect } = require('@wdio/globals')
const SignUp = require('../pages/sign-up.page')
const MenuPage = require('../pages/menu.page')
const testData = require('../../data/testData.json')
const PopUpPage = require('../pages/pop-up.page')
const MessagesPage = require('../pages/messages.page')

describe('Sign up test', () => {
    beforeEach(async() => {
        await driver.execute('mobile: terminateApp', { 'appId': 'com.wdiodemoapp'});
        await driver.execute('mobile: activateApp', { 'appId': 'com.wdiodemoapp'});
        await MenuPage.login()
    })

    it('should create a new user successfully with valid fields', async() => {
        const {email, password} = testData.validSignUp
        // await MenuPage.login()
        await SignUp.singUp(email, password)
        await expect(PopUpPage.getPopUpText('Signed Up!')).toBeExisting()
    })
    it('shouldnt create a new user because of the invalid fields', async() => {
        const{email, password} = testData.invalidSignUp
        // await MenuPage.login()
        await SignUp.singUp(email, password)
        await expect(MessagesPage.messageText("Please enter a valid email address"))
        await expect(MessagesPage.messageText("Please enter at least 8 characters"))
    })
})

