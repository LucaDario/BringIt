
import {GeneralView} from "../../../GeneralView";

export class ShareWithGroupView extends GeneralView{

    constructor(){
        super();
        if (this.constructor === ShareWithGroupView) {
            throw new TypeError("Cannot construct ShareWithGroupView instances directly");
         }
    }

    onClickShareWithGroup(){}
}