/**
 * Created by liast on 31/03/2017
 * Version {VERSION} - {VERSION_NOTES}
 */

import {ShareWithGroupView} from "../ShareWithGroupView";
import {ShareWithGroupViewPresenter} from "../presenter/ShareWithGroupViewPresenter";
import {container,inject} from 'dependency-injection-es6';
import {ShareEvent} from '../../../../event/ShareEvent'

export class ShareWithGroupViewImpl extends ShareWithGroupView{

    _presenter;

    constructor(){
        this._presenter = new ShareWithGroupViewPresenter(this);
        this._shareEvent = container.resolve(ShareEvent);
    }

    onClickShareWithGroup(groupId){
        this._shareEvent.emitShareEvent(groupId);
    }

}