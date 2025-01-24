const { expect } = require('@wdio/globals')
const SignUp = require('../pages/sign-up.page')
const testData = require('../../data/testData.json')

describe('Sample test', () => {
    it('should create a new user successfully with valid', async() => {
        const {email, password} = testData.validSignUp
        await SignUp.singUp(email, password)
        await expect(SignUp.popUpSuccess).toBeExisting()
    })
})

