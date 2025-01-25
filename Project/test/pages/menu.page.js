const { $ } = require('@wdio/globals') 

class MenuPage {
    get btnLoginOption(){
        return $('accessibility id:Login')
    }

    get btnFormsOption(){
        return $('accessibility id:Forms')
    }

    async login(){
        await this.btnLoginOption.waitForDisplayed()
        await this.btnLoginOption.click()
    }

    async forms(){
        await this.btnFormsOption.waitForDisplayed()
        await this.btnFormsOption.click()
    }
}

module.exports = new MenuPage()