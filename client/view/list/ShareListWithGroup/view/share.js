/**
 * Created by liast on 03/04/2017
 * Version {VERSION} - {VERSION_NOTES}
 */

import {ShareWithGroupViewImpl} from "./ShareWithGroupViewImpl";
import {ShowPopupUseCase} from "../../../../usecase/ShowPopupUseCase";

function sayHello(){
    alert("HELLOOOO");
}

let share = new ShareWithGroupViewImpl();

Meteor.startup (function () {
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
            //console.log(event.currentTarget.closest);
            //console.log(instance);
            //console.log(message);
            Meteor.call('channelsList','','',function(error1,result1){
                if(result1) {
                    let message = $(event.currentTarget).closest('.message')[0];
                    let html = '<select id="sites" name="sites[]" class="form-control" multiple="multiple">';
                    for(let i=0; i<result1.channels.length; i++){
                        html = html + '<option data-tokens="'+result1.channels[i].name+'">'
                            +result1.channels[i].name+'</option>';
                    }
                    html = html + '</select>';
                    popup.showPopup(html,message);
                }
            });
        },
        "validation": (message) => {
            console.log(message);
            if(message.listData != undefined){
                return message.listData.creator == "ProvaId";
            }
            return false;
        }
    })
})