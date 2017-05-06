/**
 * Created by nicolo on 01/04/17.
 * version 1.3.0 - initial version
 */

import {GeneralView} from "../../../GeneralView";

export class ForwardListView extends GeneralView{

    constructor(){
        if (this.constructor === ForwardListView) {
            throw new TypeError("Cannot construct ForwardListView instances directly");
        }
    }

}


