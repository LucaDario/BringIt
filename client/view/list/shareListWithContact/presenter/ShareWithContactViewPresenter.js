/**
 * Created by Stefano Lia on 23/04/2017
 * Version 1.0.0 - Initial Version
 * Description: This class is the presenter of the 'share with contact' functionality
 */
import {ChatSource} from "../../../../chat/ChatSource";
import {container,inject} from 'dependency-injection-es6';

export class ShareWithContactViewPresenter{

    /**
    * Public constructor
    * @param view: it represents the view of this class
    */
    constructor(view){
        this._view = view;
        this._chat = container.resolve(ChatSource);

    }
    /**
     * @method
     * When 'the share with person' button is clicked, this function provides to share the wished message to a specific
     * person who had been chosen by the user
     */
    onClickShareWithContact(person, json){
        this._chat.sendMessageToUser(person,json);
    }

}
