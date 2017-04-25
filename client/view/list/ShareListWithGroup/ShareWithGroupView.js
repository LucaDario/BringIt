/**
 * Created by Stefano Lia on 22/04/2017
 * Version 1.0.0 - Initial version
 * Description: This class simulates the interface of the 'share with group' functionality
 */


import {GeneralView} from "../../../GeneralView";

export class ShareWithGroupView extends GeneralView{

    /**
     * Public constructor
     */
    constructor(){
        super();
        if (this.constructor === ShareWithGroupView) {
            throw new TypeError("Cannot construct ShareWithGroupView instances directly");
         }
    }
    /**
     * @method
     * When 'the share with group' button is clicked, this function provides to share the wished message to a specific
     * person who had been chosen by the user
     */
    onClickShareWithGroup(){}
}