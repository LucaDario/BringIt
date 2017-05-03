/**
 * Created by Stefano Lia on 23/04/2017
 * Description: This class is the presenter of the 'share with contact' functionality
 * version 4.0.0 - bug to fix { popuo appears twice}
 */
import {ChatSource} from "../../../../chat/ChatSource";
import {container,inject} from 'dependency-injection-es6';
import {ShowPopupUseCase} from '../../../../usecase/ShowPopupUseCase';

export class ShareWithContactViewPresenter{

    /**
    * Public constructor
    */
    constructor(view){
        this._chat = container.resolve(ChatSource);
        this._popup = container.resolve(ShowPopupUseCase);
        this._view = view;

    }

    /**
     * @method
     * When 'the share with person' button is clicked, this function provides to share the wished message to a specific
     * person who had been chosen by the user
     */
    onClickShareWithContact(person, json){
        this._chat.sendMessageToUser(person,json);

        for(let i=0; i<person.length; i++) {
            this._popup.showPopupContactPermission('<h3> Do you want to give the permissions to modify the list ' +
                'to ' + person[i] + '? </h3>', person[i], json);
        }
    }

}
