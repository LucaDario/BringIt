/**
 * Created by liast on 03/04/2017
 * Version {VERSION} - {VERSION_NOTES}
 */

import {ShareWithGroupViewImpl} from "./ShareWithGroupViewImpl";
import {ShowPopupUseCase} from "../../../../usecase/ShowPopupUseCase";
import {container, singleton, inject} from 'dependency-injection-es6';

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
        "action": (event, instance, message) => {
            let popup = container.resolve(ShowPopupUseCase);
            //let message = $(event.currentTarget).closest('.message')[0];
            //console.log(event.currentTarget.closest);
            //console.log(instance);
            //console.log(message);

            //this function gets the list of channels which are open in your instance of Rocket.Chat
            Meteor.call('channelsList','','',function(error,result){
                    if(result) {
                    //let message = $(event.currentTarget).closest('.message')[0];
                    //console.log($(event.currentTarget).find('.message'));
                    //console.log(this.message);

                    //make the html which will be shown inside the popup
                    let html = '<select id="sites" name="sites[]" class="form-control" multiple="multiple">';
                    for(let i=0; i<result.channels.length; i++){
                        html = html + '<option data-tokens="'+result.channels[i].name+'">'
                            +result.channels[i].name+'</option>';
                    }
                    html = html + '</select>';
                    popup.showPopupAndShare(html,this.message);
                }
                if(error){
                    console.log(error);
                }
            });
        },
        "validation": (message) => {
            this.message = {
                msg: message.msg,
                listData : {
                    name: message.listData.name,
                    creator: message.listData.creator,
                },
                bubbleType: message.bubbleType
            };
            let idUtente = Meteor.userId();
            if(message.listData != undefined){
                return message.listData.creator == idUtente;
            }
            return false;
        }
    })
})