/**
 * Created by liast on 31/03/2017
 * Version {VERSION} - {VERSION_NOTES}
 */

import {ShareWithGroupView} from "../ShareWithGroupView";
import {ShareWithGroupViewPresenter} from "../presenter/ShareWithGroupViewPresenter";
import {container,inject} from 'dependency-injection-es6';
import {ShareEventEmitter} from '../../../../event/ShareEventEmitter'

export class ShareWithGroupViewImpl extends ShareWithGroupView{

    _presenter;

    constructor() {
        super();
        this._presenter = new ShareWithGroupViewPresenter(this);
        this._shareEvent = container.resolve(ShareEventEmitter);
        this._shareEvent.on('shareEvent', (list, groupId) => {
            this._presenter.openShareWithGroupView(list, groupId);
            //RocketChat.sendMessage(user, { msg: 'Lista della spesa ' + listName }, { _id: groupId});
        });
    }


    onClickShareWithGroup(list,groupId){
        this._shareEvent.emitShareEvent(list,groupId);
    }

}