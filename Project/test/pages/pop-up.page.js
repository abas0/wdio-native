const { $ } = require('@wdio/globals')

class PopUpPage{
    getPopUpText(text){
        return $(`//android.widget.TextView[@text="${text}"]`)
    }
}

module.exports = new PopUpPage()