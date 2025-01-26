const { $ } = require('@wdio/globals') 

class MenuPage {
    get btnLoginOption(){
        return $('accessibility id:Login')
    }

    get btnFormsOption(){
        return $('accessibility id:Forms')
    }

    get btnHomeOption(){
        return $('accessibility id:Home');
    }

    get btnWebviewOption(){
        return $('accessibility id:Webview')
    }

    get btnDragOption(){
        return $('accessibility id:Drag')
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

    async webview(){
        await this.btnWebviewOption.waitForDisplayed()
        await this.btnWebviewOption.click()
    }

    async drag(){
        await this.btnDragOption.waitForDisplayed()
        await this.btnDragOption.click()
    }
}

module.exports = new MenuPage()