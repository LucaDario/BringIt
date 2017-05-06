/**
 * Created by Stefano Lia on 22/04/2017
 * Version 1.0.0 - Initial version
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

    onClickShareWithGroup(){}
}