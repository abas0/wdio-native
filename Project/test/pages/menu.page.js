const { $ } = require('@wdio/globals') 

class MenuPage {
    get btnLoginOption(){
        return $('accessibility id:Login')
    }

    get btnFormsOption(){
        return $('accessibility id:Forms')
    }

    get btnHomeOption(){
        return $("accessibility id:Home");
    }

    async login(){
        await this.btnLoginOption.waitForDisplayed()
        await this.btnLoginOption.click()
    }

    async forms(){
        await this.btnFormsOption.waitForDisplayed()
        await this.btnFormsOption.click()
    }

    async home(){
        await this.btnHomeOption.waitForDisplayed()
        await this.btnHomeOption.click()
    }
}

module.exports = new MenuPage()