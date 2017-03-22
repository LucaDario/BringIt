/**
 * Created by Francesco Bazzerla on 22/03/17.
 */

export class AddItemView extends GeneralView{
    constructor(){
        super();
        if (this instanceof AddItemView) {
            throw new TypeError("Cannot construct AddItemView instances directly");
        }
    }

    addItem(listId,item){}
    /**
     * @event onAddItemClicked
     *It represents the view that allows you to add an item into bringit.
     */
    onAddItemClicked(){}
}
