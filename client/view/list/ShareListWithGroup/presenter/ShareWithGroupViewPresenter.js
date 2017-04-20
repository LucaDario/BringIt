/**
 * Created by liast on 31/03/2017
 * Version {VERSION} - {VERSION_NOTES}
 */
import {ChatSource} from "../../../../chat/ChatSource";
import {container, singleton, inject} from 'dependency-injection-es6';
import {ChooseEventEmitter} from '../../../../event/ChooseEventEmitter';
import {ShareWithGroupViewImpl} from "../view/ShareWithGroupViewImpl"

export class ShareWithGroupViewPresenter{

    constructor(view){
        this._view = view;
        this._chat = container.resolve(ChatSource);
        this._eventEmitter = container.resolve(ChooseEventEmitter);
        this._eventEmitter.on('chooseEvent', (group,list) => {
            //console.log(group);
            for(let i=0; i<group.length; i++) {
                this._chat.sendMessageToChatWithJson(group[i], list);
            }
        });

    }
    openShareWithGroupView(list, groupId){
        this._chat.sendMessageToChatWithJson(groupId,list);
    }
}