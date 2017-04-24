/**
 * Created by Stefano Lia on 23/04/2017
 * Version 1.0.0 - Initial version
 */

import {ShareWithContactViewImpl} from './ShareWithContactViewImpl';
import {container, singleton, inject} from 'dependency-injection-es6';
import {ShowPopupUseCase} from "../../../../usecase/ShowPopupUseCase";

Meteor.startup (function () {

    //the final receiver of the shareEvent emitted by the popup
    let shareContact = new ShareWithContactViewImpl();

    //add the button to share the ToDoListBubble with a group
    RocketChat.MessageAction.addButton({
        "id": 'shareContact-pin',
        "icon": 'icon-user',
        "i18nLabel": 'Share your list with user',
        "context": [
            'message',
            'message-mobile'
        ],
        "action": (event, instance) => {

            Meteor.call('getUsers',function(error,result){
                console.log(result);
                let cond = false;
                let pop = container.resolve(ShowPopupUseCase);
                let html = '<h3 style="color: #FFFFFF"> Choose a User </h3>' +
                    '<select id="sites" name="sites[]" class="form-control" multiple="multiple">';
                for (let i = 0; i < result.length; i++) {
                    if(result[i].username != Meteor.user().username && result[i].username != 'rocket.cat') {
                        html = html + '<option data-tokens="' + result[i].username + '">'
                            + result[i].username + '</option>';
                        if(cond == false){
                            cond = true;
                        }
                    }
                }
                html = html + '</select>';
                if(cond) {
                    pop.showPopupAndSend(html, this.message);
                }
                else{
                    pop.showPopup('<p style="color: #FFFFFF">No Users available</p>');
                }
            });
        },
        "validation": (message) => {
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