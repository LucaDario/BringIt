/**
 * Created by Stefano Lia on 03/04/2017
 * Version {1.0.1} - {This function adds a pin button when a message is a TodoListBubble}
 */

import {ShowPopupUseCase} from "../../../../usecase/ShowPopupUseCase";
import {container, singleton, inject} from 'dependency-injection-es6';
import {ChooseEventEmitter} from "../../../../event/ChooseEventEmitter";

/**
 * This function creates a JSON file which allows adding a pin button.
 */

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

            //this function gets the list of channels which are open in your instance of Rocket.Chat
            Meteor.call('channelsList','','',function(error,result){
                if(result) {
                    //let message = $(event.currentTarget).closest('.message')[0];
                    console.log(this.message);

                    // get the message
                    let json = this.message;
                    let popup = container.resolve(ShowPopupUseCase);

                    //make the html which will be shown inside the popup
                    let html = '<h3 style="color: #FFFFFF"> Scegli il gruppo con cui condividere la lista </h3>' +
                        '<select id="sites" name="sites[]" class="form-control" multiple="multiple">';
                    for(let i=0; i<result.channels.length; i++){
                        html = html + '<option data-tokens="'+result.channels[i].name+'">'
                            +result.channels[i].name+'</option>';
                    }
                    html = html + '</select>';

                    popup.showPopupAndSend(html, json);
                }
                if(error){
                    console.log(error);
                }
            });
        },
        "validation": (message) => {
            this.message = {
                listData : message.listData,
                bubbleType: message.bubbleType
            };
            let idUtente = Meteor.userId();
            if(message.listData != undefined){
                return message.listData.listData._creatorId == idUtente;
            }
            return false;
        }
    })
})