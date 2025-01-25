const { $ } = require('@wdio/globals')

class MessagesPage{
    messageText(text){
        return $(`//android.widget.TextView[@text="${text}"]`)
    }
}

module.exports = new MessagesPage()