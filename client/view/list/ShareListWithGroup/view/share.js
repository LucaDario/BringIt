/**
 * Created by liast on 03/04/2017
 * Version {VERSION} - {VERSION_NOTES}
 */

import {ShareWithGroupViewImpl} from "./ShareWithGroupViewImpl";
import {ShowPopupUseCase} from "../../../../usecase/ShowPopupUseCase";


let share = new ShareWithGroupViewImpl();

Meteor.startup (function () {
    console.log("STARTUP");
    RocketChat.MessageAction.addButton({
        "id": 'share-pin',
        "icon": 'icon-forward',
        "i18nLabel": 'Share your list',
        "context": [
            'message',
            'message-mobile'
        ],
        "action": (event, instance) => {
            let popup = new ShowPopupUseCase();
            let message = $(event.currentTarget).closest('.message')[0];
            console.log(event.currentTarget.closest);
            console.log(instance);
            //console.log(message);
            Meteor.call('channelsList','','',function(error1,result1){
                if(result1) {
                    let html = '<ul>';
                    for(let i=0; i<result1.channels.length; i++){
                        html = html + '<li>'+result1.channels[i].name+'</li>';
                    }
                    html = html + '</ul>';
                    console.log(html);
                    popup.showPopup(html);
                    console.log(result1);
                }
            });
            Meteor.call('getRoomIdByNameOrId', "ciao", function (error, result) {
                if (result) {
                    share.onClickShareWithGroup(message, result);
                }
                else if (error) {
                    alert(error);
                }
            })
        },
        "validation": (message) => {
            console.log(message);
            if(message.listData != undefined){
                return message.listData.creator == "ProvaId";
            }
            //console.log(message.listData.creator);
            return false;
            /*if not RocketChat.models.Subscriptions.findOne({rid: message.rid}) ?
            return false
            else
            if message.pinned or
            not
            RocketChat.settings.get('Message_AllowPinning')
            return false*/
        }
    })
})