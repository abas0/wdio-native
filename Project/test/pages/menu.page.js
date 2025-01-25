const { $ } = require('@wdio/globals') 

class MenuPage {
    get btnLoginOption(){
        return $('accessibility id:Login')
    }

    async login(){
        await this.btnLoginOption.waitForDisplayed()
        await this.btnLoginOption.click()
    }
}

module.exports = new MenuPage()