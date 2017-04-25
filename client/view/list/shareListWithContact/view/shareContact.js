/**
 * Created by Stefano Lia on 23/04/2017
 * Version 1.0.2 - At the beginning of the application's start this function adds a button which is visible when you click the
 * 'option' button above a message.
 * Description: This function add the 'share with contact' button
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
                let cond = false; //true if there are users available
                let pop = container.resolve(ShowPopupUseCase);
                // this html will be shown inside the popup
                let html = '<select id="sites" name="sites[]" class="form-control" multiple="multiple">';
                //check the found users
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
                    pop.showPopupAndSend('Choose a user',html, this.message);
                }
                else{
                    pop.showPopup('Choose a user','No Users available');
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
