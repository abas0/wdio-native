const { expect } = require('@wdio/globals')
const LoginPage = require('../pages/login.page')
const testData = require('../../data/testData.json')

describe('Sample test', () => {
    it('should login with valid credentials', async() => {
        const {email, password} = testData.validLogin
        await LoginPage.login(email, password)
        driver.pause(5000)
        await expect(LoginPage.popUpSuccess).toBeExisting()
    })
})

