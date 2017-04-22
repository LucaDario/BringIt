/**
 * Created by Stefano Lia on 22/04/2017
 * Version 1.0.0 - Initial version
 */

import {GeneralView} from "../../../GeneralView";

export class ShareWithContactView extends GeneralView{

    constructor(){
        super();
        if (this.constructor === ShareWithContactView) {
            throw new TypeError("Cannot construct ShareWithGroupView instances directly");
        }
    }
}
