/**
 * Created by Stefano Lia on 03/04/2017
 * Version {1.0.1} - {This function adds a button when a message contains a listData field}
 * Description: At the beginning of the application's start this function adds a button which is visible when you click the
 * 'option' button above a message.
 */

import {ShowPopupUseCase} from "../../../../usecase/ShowPopupUseCase";
import {container, singleton, inject} from 'dependency-injection-es6';
import {ShareWithGroupViewImpl} from './ShareWithGroupViewImpl';

Meteor.startup (function () {

    //the final receiver of the shareEvent emitted by the popup
    let shareGroup = new ShareWithGroupViewImpl();

    //add the button to share the ToDoListBubble with a group
    RocketChat.MessageAction.addButton({
        "id": 'shareGroup-pin',
        "icon": 'icon-forward',
        "i18nLabel": 'Share your list with channel',
        "context": [
            'message',
            'message-mobile'
        ],
        "action": (event, instance) => {
            //this function gets the list of channels which are open in your instance of Rocket.Chat
            Meteor.call('channelsList','','',function(error,result){
                if(result) {
                    //let message = $(event.currentTarget).closest('.message')[0];
                    let popup = container.resolve(ShowPopupUseCase);

                    //make the html which will be shown inside the popup
                    let html = '<select id="sites" name="sites[]" class="form-control" multiple="multiple">';
                    for(let i=0; i<result.channels.length; i++){
                        html = html + '<option data-tokens="'+result.channels[i].name+'">'
                            +result.channels[i].name+'</option>';
                    }
                    html = html + '</select>';

                    popup.showPopupAndSend('Choose a channel',html, this.message);
                }
                if(error){
                    console.log(error);
                }
            });
        },
        "validation": (message) => {
            //shows the button only if the message contains a listData field
            if(message.listData != undefined){
                // copy the message
                this.message = {
                    listData: message.listData,
                    bubbleType: message.bubbleType
                };
                return message.listData._creatorId == Meteor.userId();
            }
            return false;
        }
    })
})
