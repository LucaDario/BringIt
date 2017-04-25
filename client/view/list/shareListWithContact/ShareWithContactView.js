/**
 * Created by Stefano Lia on 22/04/2017
 * Version 1.0.0 - Initial version
 * Description: This class simulates the interface of the 'share with contact' functionality
 */

import {GeneralView} from "../../../GeneralView";

export class ShareWithContactView extends GeneralView{


    /**
     * Public constructor
     */
    constructor(){
        super();
        if (this.constructor === ShareWithContactView) {
            throw new TypeError("Cannot construct ShareWithGroupView instances directly");
        }
    }

    /**
     * @method
     * When 'the share with person' button is clicked, this function provides to share the wished message to a specific
     * person who had been chosen by the user
     */
    onClickShareWithContact(){}
}
