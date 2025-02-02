const { $ } = require('@wdio/globals')

class DragPage{
    getDrag(index){
        return $(`//android.view.ViewGroup[@content-desc="drag-${index}"]/android.widget.ImageView`)
    }

    get dropElement(){
        return $('-android uiautomator:new UiSelector().className(\"android.view.ViewGroup\").instance(8)')
    }

    get btnRestart(){
        return $('accessibility id:renew')
    }

    async dragAndDropItems() {
        const dragIndex = ["l1", "c1" ,"r1", "l2", "c2", "r2", "l3", "c3", "r3"]
        const droppable = await this.dropElement

        for (let index of dragIndex){
            const draggable = await this.getDrag(index)
            await draggable.dragAndDrop(droppable)
        }
    }

    async dragAndDropOneItem(image){
        const draggable = await this.getDrag(image)
        const droppable = await this.dropElement
        await draggable.dragAndDrop(droppable)
    }

    async restarDragAndDrop(){
        await this.btnRestart.click()
    }
}

module.exports = new DragPage()