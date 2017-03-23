/**
 * The view for AddItemViewImpl.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.0 -
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
     * Events
     */
    //TODO: IMPLEMENT THIS
    onAddItemClicked(){}
}
