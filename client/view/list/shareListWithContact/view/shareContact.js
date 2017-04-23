/**
 * Created by Stefano Lia on 23/04/2017
 * Version 1.0.0 - Initial version
 */

import {ShareWithContactViewImpl} from './ShareWithContactViewImpl';

/*Meteor.startup (function () {

    //the final receiver of the shareEvent emitted by the popup

    //add the button to share the ToDoListBubble with a group
    RocketChat.MessageAction.addButton({
        "id": 'share-pin',
        "icon": 'icon-user',
        "i18nLabel": 'Share your list with user',
        "context": [
            'message',
            'message-mobile'
        ],
        "action": (event, instance) => {
            console.log(Meteor.users);
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
*/