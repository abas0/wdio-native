const { $ } = require('@wdio/globals')

class LoginPage {
    get inputEmail () {
        return $('accessibility id:input-email')
    }

    get inputPassword () {
        return $('accessibility id:input-password')
    }

    get btnLogin () {
        return $('-android uiautomator:new UiSelector().className(\"android.view.ViewGroup\").instance(16)')
    }

    async login (email, password) {
        await this.inputEmail.waitForDisplayed()
        await this.inputEmail.setValue(email)
        await this.inputPassword.waitForDisplayed()
        await this.inputPassword.setValue(password)
        await this.btnLogin.click()
    }
}

module.exports = new LoginPage()
