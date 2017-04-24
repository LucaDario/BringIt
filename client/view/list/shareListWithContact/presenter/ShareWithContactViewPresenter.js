/**
 * Created by Stefano Lia on 23/04/2017
 * Version 1.0.0 - Initial Version
 */
import {ChatSource} from "../../../../chat/ChatSource";
import {container,inject} from 'dependency-injection-es6';
import {ShowPopupUseCase} from '../../../../usecase/ShowPopupUseCase';
import {ShareEventEmitter} from '../../../../event/ShareEventEmitter'

export class ShareWithContactViewPresenter{

    /**
    * Public constructor
    * @param view: it represents the view of this class
    */
    constructor(view){
        this._view = view;
        this._chat = container.resolve(ChatSource);

    }

    shareWithContact(person, json){
        this._chat.sendMessageToUser(person,json);
    }

}
