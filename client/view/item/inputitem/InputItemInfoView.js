/**
 * Created by nicolo on 22/04/17.
 * This class is the interface for the InputItemInfoViewImpl
 * version 2.0.0 - Completed
 */

import {GeneralView} from "../../../GeneralView"

export class InputItemInfoView extends GeneralView{

    /**
     * Public constructor. If called directly it will produce an exception as this class is abstract.
     */
    constructor() {
        super();
        if (this.constructor === InputItemInfoView) {
            throw new TypeError("Cannot construct InputItemInfoView instances directly");
        }
    }

    onSaveClicked(){}


}




