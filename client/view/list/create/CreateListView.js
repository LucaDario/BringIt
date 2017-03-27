/**
 * Base Abstract class represents the generic
 * Created by lucadario on 23/03/17.
 */

import {GeneralView} from "../../../GeneralView"

export class CreateListView extends GeneralView{

	/**
	 * Public constructor. If called directly it will produce an exception as this class is abstract.
	 */
	constructor() {
	    super();
		/*if (this instanceof CreateListView) {
			throw new TypeError("Cannot construct CreateListView instances directly");
		}*/
	}

}



