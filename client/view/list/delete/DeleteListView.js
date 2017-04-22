/**
 * The view for DeleteListViewImpl.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.0 -
 */

import {GeneralView} from "../../../GeneralView"

export class DeleteListView extends GeneralView{
    constructor() {
        super();
        if (this.constructor ===  DeleteListView) {
            throw new TypeError("Cannot construct DeleteListView instances directly");
        }
    }

    /**
     * @event onDeleteListClicked
     *It represents the view that allows you to delete a bringit list.
     */
    onDeleteListClicked(listId){}
}
