/**
 * Created by liast on 03/04/2017
 * Version {VERSION} - {VERSION_NOTES}
 */

import {ShareWithGroupViewImpl} from "./ShareWithGroupViewImpl";
import {ShowPopupUseCase} from "../../../../usecase/ShowPopupUseCase";

let share = new ShareWithGroupViewImpl();

Meteor.startup (function () {
    //add the button to share the ToDoListBubble
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
            //let message = $(event.currentTarget).closest('.message')[0];
            //console.log(event.currentTarget.closest);
            //console.log(instance);
            //console.log(message);

            //this function gets the list of channels which are open in your instance of Rocket.Chat
            Meteor.call('channelsList','','',function(error,result){
                if(result) {
                    let message = $(event.currentTarget).closest('.message')[0];

                    //make the html which will be shown inside the popup
                    let html = '<select id="sites" name="sites[]" class="form-control" multiple="multiple">';
                    for(let i=0; i<result.channels.length; i++){
                        html = html + '<option data-tokens="'+result.channels[i].name+'">'
                            +result.channels[i].name+'</option>';
                    }
                    html = html + '</select>';

                    popup.showPopupAndShare(html,message);
                }
                if(error){
                    console.log(error);
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