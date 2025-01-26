const { $ } = require('@wdio/globals')

class FormsPage{
    get inputField(){
        return $('accessibility id:text-input')
    }

    get inputTextResult(){
        return $('accessibility id:input-text-result')
    }

    get dropdown(){
        return $('-android uiautomator:new UiSelector().resourceId(\"text_input\")')
    }

    get popUpOption(){
        return $('(//android.widget.CheckedTextView[@resource-id="android:id/text1"])[2]')
    }

    get btnActive(){
        return $('accessibility id:button-Active')
    }
    
    async formsComplete(input_field){
        await this.inputField.waitForDisplayed()
        await this.inputField.setValue(input_field)
        await this.dropdown.click()
        await this.popUpOption.waitForDisplayed()
        await this.popUpOption.click()
        await this.btnActive.waitForDisplayed()
        await this.btnActive.click()
    }

    async formsTextResult(input_field){
        await this.inputField.waitForDisplayed()
        await this.inputField.setValue(input_field)
    }
}

module.exports = new FormsPage()