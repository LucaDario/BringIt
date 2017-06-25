/**
 * Created by Stefano Lia on 22/04/2017
 * Version 4.0.0 - completed
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
     * @param group : the group you want to share the list
     * @param json : the message which represents the list itself
     */
    onClickShareWithGroup(group,json){}
}
