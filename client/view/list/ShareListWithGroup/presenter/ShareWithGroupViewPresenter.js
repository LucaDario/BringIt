/**
 * Created by liast on 31/03/2017
 * Version {VERSION} - {VERSION_NOTES}
 */
import {ChatSource} from "../../../../chat/ChatSource";
import {container, singleton, inject} from 'dependency-injection-es6';
import {ChooseEventEmitter} from '../../../../event/ChooseEventEmitter';
import {ShowPopupUseCase} from '../../../../usecase/ShowPopupUseCase';
import {ShareWithGroupViewImpl} from "../view/ShareWithGroupViewImpl"

export class ShareWithGroupViewPresenter{

    constructor(view){
        this._view = view;
        this._chat = container.resolve(ChatSource);
        this._eventEmitter = container.resolve(ChooseEventEmitter);
        this._eventEmitter.on('chooseEvent', (group,json) => {
            //console.log(group);
            for(let i=0; i<group.length; i++) {
                this._chat.sendMessageToChatWithJson(group[i], json);
            }
            for(let i=0; i<group.length; i++) {
                console.log(group[i]);
                Meteor.call('getRoomIdByNameOrId',group[i], function (error1,result1) {
                    if(result1) {
                        Meteor.call('getUsersOfRoom', result1, true, function (error2, result2) {
                            if (result2) {
                                let show = container.resolve(ShowPopupUseCase);
                                //console.log(result2.records);
                                let html = '<select id="sites" name="sites[]" class="form-control" multiple="multiple">';
                                for(let i=0; i<result2.records.length; i++){
                                    html = html + '<option data-tokens="'+result2.records[i]+'">'
                                        +result2.records[i]+'</option>';
                                }
                                html = html + '</select>';
                                show.showPopup(html);
                            }
                            else {
                                console.log(error2);
                            }
                        });
                    }
                    else{
                        alert(error1);
                        console.log(error1);
                    }
                });
            }
        });

    }
    openShareWithGroupView(list, groupId){
        this._chat.sendMessageToChatWithJson(groupId,list);
    }
}