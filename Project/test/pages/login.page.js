const { $ } = require('@wdio/globals')

class LoginPage {
    get btnLoginOption(){
        return $('accessibility id:Login')
    }
    get inputEmail () {
        return $('accessibility id:input-email');
    }

    get inputPassword () {
        return $('accessibility id:input-password');
    }

    get btnLogin () {
        return $('-android uiautomator:new UiSelector().className(\"android.view.ViewGroup\").instance(16)');
    }

    get popUpSuccess(){
        return $('//android.widget.TextView[@text="Success"]');
    }

    async login (email, password) {
        await this.btnLoginOption.click();
        await this.inputEmail.waitForDisplayed();
        await this.inputEmail.setValue(email);
        await this.inputPassword.waitForDisplayed();
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    /* open () {
        return super.open('login');
    } */
}

module.exports = new LoginPage();
