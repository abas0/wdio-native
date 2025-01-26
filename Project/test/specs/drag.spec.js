const { expect } = require('@wdio/globals')
const MenuPage = require('../pages/menu.page')
const DragPage = require('../pages/drag.page')
const MessagesPage = require('../pages/messages.page')

describe('Drag tests', () => {
    beforeEach(async() => {
        await driver.execute('mobile: activateApp', { 'appId': 'com.wdiodemoapp'});
        await MenuPage.drag()
    })

    afterEach(async() => {
        await driver.execute('mobile: terminateApp', { 'appId': 'com.wdiodemoapp'})
    })

    it('should filter documentation', async() => {
        await DragPage.dragAndDropItem()
        await expect(MessagesPage.messageText("You made it, click retry if you want to try it again.")).toBeDisplayed()
    })
})