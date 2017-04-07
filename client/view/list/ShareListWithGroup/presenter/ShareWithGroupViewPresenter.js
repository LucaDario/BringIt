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
            console.log(group);
            //this._chat.sendMessageToChat(group);
        });

    }
    openShareWithGroupView(list, groupId){
        //alert("CIAO");
        //RocketChat.sendMessage(user, { msg: 'Lista della spesa ' + list }, { _id: groupId});
        this._chat.sendMessageToChat(groupId,list);
    }
}