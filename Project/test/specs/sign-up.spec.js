const { expect } = require('@wdio/globals')
const SignUp = require('../pages/sign-up.page')
const MenuPage = require('../pages/menu.page')
const testData = require('../../data/testData.json')
const PopUpPage = require('../pages/pop-up.page')

describe('Sign up test', () => {
    it('should create a new user successfully with valid', async() => {
        const {email, password} = testData.validSignUp
        await MenuPage.login()
        await SignUp.singUp(email, password)
        await expect(PopUpPage.getPopUpText('Signed Up!')).toBeExisting()
    })
})

