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

    it('drag and drop successfully', async() => {
        await DragPage.dragAndDropItems()
        await expect(MessagesPage.messageText("You made it, click retry if you want to try it again.")).toBeDisplayed()
    }) 

    it('restart drag and drop game successfully', async() => {
        await DragPage.dragAndDropOneItem("l1")
        await(expect(DragPage.getDrag("l1"))).not.toBeExisting()
        await DragPage.restarDragAndDrop()
        await(expect(DragPage.getDrag("l1"))).toBeExisting()
    }) 
    it('drag and drop the wrong image', async() => {
        await DragPage.dragAndDropOneItem("r3")
        await(expect(DragPage.getDrag("l1"))).toBeExisting()
        await(expect(DragPage.getDrag("r3"))).toBeExisting()
    })
})