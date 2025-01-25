const { $ } = require('@wdio/globals')

class SignUp {
    get btnSignUpTab(){
        return $('-android uiautomator:new UiSelector().className(\"android.view.ViewGroup\").instance(11)')
    }

    get inputEmail () {
        return $('accessibility id:input-email')
    }

    get inputPassword () {
        return $('accessibility id:input-password')
    }

    get inputConfirmPassword () {
        return $('accessibility id:input-repeat-password')
    }
    
    get btnSignUp () {
        return $('-android uiautomator:new UiSelector().className(\"android.view.ViewGroup\").instance(17)');
    }

    async singUp (email, password) {
        await this.btnSignUpTab.waitForDisplayed()
        await this.btnSignUpTab.click()
        await this.inputEmail.waitForDisplayed()
        await this.inputEmail.setValue(email)
        await this.inputPassword.waitForDisplayed()
        await this.inputPassword.setValue(password)
        await this.inputConfirmPassword.waitForDisplayed()
        await this.inputConfirmPassword.setValue(password)
        await this.btnSignUp.click();
    }
}

module.exports = new SignUp();
