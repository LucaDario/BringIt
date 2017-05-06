/**
 * Created by Stefano Lia on 23/04/2017
 * Version 1.0.0 - Initial version
 */

import {ShareWithContactView} from '../ShareWithContactView';
import {ShareWithContactViewPresenter} from "../presenter/ShareWithContactViewPresenter";
import {container,inject} from 'dependency-injection-es6';

export class ShareWithContactViewImpl extends ShareWithContactView{

    /**
     * Public constructor
     */
    constructor(){
        super();
        this._presenter = new ShareWithContactViewPresenter(this);
    }

    onClickShareWithContact(){}

}