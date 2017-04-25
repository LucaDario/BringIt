/**
 * Created by Stefano Lia on 23/04/2017
 * Version 1.0.0 - Initial version
 * Description: The view of the 'share with contact button'. It catches the share event and it delegates
 * the task to the Presenter
 */

import {ShareWithContactView} from '../ShareWithContactView';
import {ShareWithContactViewPresenter} from "../presenter/ShareWithContactViewPresenter";
import {container,inject} from 'dependency-injection-es6';
import {ShareEventEmitter} from '../../../../event/ShareEventEmitter'

export class ShareWithContactViewImpl extends ShareWithContactView{

    /**
     * Public constructor
     */
    constructor(){
        super();
        this._presenter = new ShareWithContactViewPresenter(this);
        this._shareEmitter = container.resolve(ShareEventEmitter);
        // this statement is used to catch the 'share event'
        this._shareEmitter.on('shareEvent', (person,json,title) => {
            if(title === 'Choose a user') {
                this.onClickShareWithContact(person, json);
            }
        });
    }

    /**
     * @method
     * When 'the share with person' button is clicked, this function provides to share the wished message to a specific
     * person who had been chosen by the user
     */
    onClickShareWithContact(person,json){
        this._presenter.onClickShareWithContact(person,json);
    }

}