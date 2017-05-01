/**
 * Created by Riccardo Montagnin on 29/03/2017.
 * Version 3.0.0 -  Bug fixes completed
 * Description: Interface which allows to communicate with the chat.
 * To obtain an instance of this interface be sure to include the following code inside the class that uses it:
 * <code>
 *  // Needed import
 *  import {container} from 'dependency-injection-es6';
 *
 *  // This will get your instance
 *  var chatSource = container.resolve(ChatSource);
 * <code/>
 */

import {container,inject} from 'dependency-injection-es6';
const EventEmitter = require('events');
export class ChatSource{
    constructor(){}

    /**
     * @method
     * This method sends a message to a channel, using the pattern Publish/Subscribe, call Meteor.SubScribe('sendMessage', function()..)
     * @param roomName {string} the unique name of a channel, not the id
     * @param json {json} represents the message to send
     */
    sendMessageToChatWithJson(roomName, json){
        Meteor.subscribe('sendMessageWithJson',roomName,json);

    }

    /**
     * @method
     * This method sends a direct message to an user inside Rocket.chat
     * @param user: represents all the users who the users wants to send a message to
     * @param json: represents the message to send
     */

    sendMessageToUser(user, json){
        for(let i=0; i < user.length; i++) {
            //creating a direct message
            Meteor.call('createDirectMessage', user[i], function (error, result) {
                if (result) {
                    const msgObject = {
                        "_id": Random.id(),
                        "rid": result.rid,
                        "bubbleType": json.bubbleType,
                        "listData": json.listData,
                        "msg": '',
                    };
                    console.log(msgObject);
                    //sending the message just created
                    Meteor.call('sendMessage', msgObject);
                }
                else {
                    console.log(error);
                }
            });
        }
    }

    showPopup(content){
        //TODO: stub.
    }
}

container.registerAsSingleton(ChatSource);

