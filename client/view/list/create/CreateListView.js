/**
 * Base Abstract class represents the generic view for add a view for  create list
 * Created by lucadario on 23/03/17.
 *  * version 2.0.0 - Completed
 */

import {GeneralView} from "../../../GeneralView"

export class CreateListView extends GeneralView{

	/**
	 * Public constructor. If called directly it will produce an exception as this class is abstract.
	 */
	constructor() {
	    super();
		if (this.constructor === CreateListView) {
			throw new TypeError("Cannot construct CreateListView instances directly");
		}
	}

    /**
     * This method returned a Json config for flex-tab-bar
     * @returns {*|{JSON}|String}
     */
	renderView(){}

}



