/**
 * The view for DeleteListViewImpl.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 2.0.0 - completed
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
     * Allows you to show the popup for deletion of the list
     * @param listId {Object}: the id of the list
     * @param nameList {string}: the name of the list
     */
    openDeleteListView(listId,nameList){}
}
