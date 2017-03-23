/**
 * The view for DeleteListViewImpl.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.0 -
 */

export class DeleteListView extends GeneralView{
    constructor() {
        super();
        if (this instanceof DeleteListView) {
            throw new TypeError("Cannot construct DeleteListView instances directly");
        }
    }

    /**
     * @event onAddItemClicked
     *It represents the view that allows you to add an item into bringit.
     */
    onDeleteListClicked(listId){}
}
