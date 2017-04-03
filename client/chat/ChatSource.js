/**
 * Description: Interface which allows to communicate with the chat.
 * To obtain an instance of this interface be sure to include the following code inside the class that uses it:
 * <code>
 *  // Needed import
 *  import {container} from 'dependency-injection-es6';
 *
 *  // This will get your instance
 *  var chatSource = container.resolve(ChatSource);
 * <code/>
 *
 * Created by Riccardo Montagnin on 29/03/2017.
 * Version 1.0.0 - Initial version
 */

import {container,inject} from 'dependency-injection-es6';

export class ChatSource{
    constructor(){}

    /**
     * Send a message to rocketchat, this use a pattern Publish/Subscribe, call Meteor.SubScribe('sendMessage', function()..)
     * @param roomName {string} name unique of room
     * @param message {html} message to send
     */
    sendMessageToChat(roomName, message){

        //provvisorio
        let messageHtml = message;
        Meteor.subscribe('sendMessage',roomName,messageHtml,{
            onReady: () =>{

            }
        });
    }

    showPopup(content){
        //TODO: stub.
    }
}

container.registerAsSingleton(ChatSource);