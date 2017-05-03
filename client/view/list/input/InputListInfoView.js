/**
 * Base Abstract class represents the generic view for add list
 * Created by lucadario on 27/03/17.
 * version 2.0.0 - on hold for other component
 */

import {GeneralView} from "../../../GeneralView"

export class InputListInfoView extends GeneralView{

    /**
     * Public constructor. If called directly it will produce an exception as this class is abstract.
     */
    constructor() {
        super();
        /*if (this instanceof CreateListView) {
         throw new TypeError("Cannot construct CreateListView instances directly");
         }*/
    }

    /**
     *This Create a listData and call a emitSaveEvent on SalveEventClass whit ListData created
     * @param name of list {string}
     * @param photoList path {string}
     */
    onSaveClicked(name,photoList){}


}




