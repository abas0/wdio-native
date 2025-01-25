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
        const {email, password, confirm_password} = testData.validSignUp
        await SignUp.singUp(email, password, confirm_password)
        await expect(PopUpPage.getPopUpText('Signed Up!')).toBeExisting()
    })
    it('shouldnt create a new user because of the invalid fields', async() => {
        const{wrong_email, wrong_password, confirm_password} = testData.invalidSignUp
        await SignUp.singUp(wrong_email, wrong_password, confirm_password)
        await expect(MessagesPage.messageText("Please enter a valid email address")).toBeDisplayed()
        await expect(MessagesPage.messageText("Please enter at least 8 characters")).toBeDisplayed()
    })
    it('shouldnt create a new user because of the confirm password is different than the password field', async() =>{
        const{right_email, right_password, wrong_confirm_password} = testData.invalidSignUp
        await SignUp.singUp(right_email, right_password, wrong_confirm_password) 
        await expect(MessagesPage.messageText("Please enter a valid email address")).not.toBeDisplayed()
        await expect(MessagesPage.messageText("Please enter at least 8 characters")).not.toBeDisplayed()
        await expect(MessagesPage.messageText("Please enter the same password")).toBeDisplayed()
    })
})

