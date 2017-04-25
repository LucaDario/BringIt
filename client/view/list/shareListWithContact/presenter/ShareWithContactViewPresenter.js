/**
 * Created by Stefano Lia on 23/04/2017
 * Version 1.0.0 - Initial Version
 * Description: This class is the presenter of the 'share with contact' functionality
 */
import {ChatSource} from "../../../../chat/ChatSource";
import {container,inject} from 'dependency-injection-es6';
import {ShowPopupUseCase} from '../../../../usecase/ShowPopupUseCase';

export class ShareWithContactViewPresenter{

    /**
    * Public constructor
    * @param view: it represents the view of this class
    */
    constructor(view){
        this._view = view;
        this._chat = container.resolve(ChatSource);
        this._popup = container.resolve(ShowPopupUseCase);

    }
    /**
     * @method
     * When 'the share with person' button is clicked, this function provides to share the wished message to a specific
     * person who had been chosen by the user
     */
    onClickShareWithContact(person, json){
        this._chat.sendMessageToUser(person,json);

        let f = function (person){
            Meteor.subscribe('sendPermissionsContact', json.listData._id, person);
        }

        this._popup.showPopupWithFunction('<h3> Do you want to give the permissions to modify the list ' +
            'to the user? </h3>',f(person),1);
    }

}
