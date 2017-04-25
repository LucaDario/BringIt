/**
 * Created by Stefano Lia on 31/03/2017
 * Version {1.0.0} - {Initial version}
 * Description: The view of the 'share with group button'. It catches the share event and it delegates
 * the task to the Presenter
 */

import {ShareWithGroupView} from "../ShareWithGroupView";
import {ShareWithGroupViewPresenter} from "../presenter/ShareWithGroupViewPresenter";
import {container,inject} from 'dependency-injection-es6';
import {ShareEventEmitter} from '../../../../event/ShareEventEmitter'

export class ShareWithGroupViewImpl extends ShareWithGroupView{

    /**
     * Public constructor
     */

    constructor() {
        super();
        this._presenter = new ShareWithGroupViewPresenter(this);
        this._shareEvent = container.resolve(ShareEventEmitter);
        this._shareEvent.on('shareEvent', (group,json, title) => {
            if(title === 'Choose a channel') {
                this.onClickShareWithGroup(group, json);
            }
        });
    }

    /**
     * @method
     * When 'the share with group' button is clicked, this function provides to share the wished message to a specific
     * person who had been chosen by the user
     */

    onClickShareWithGroup(group,json){
        this._presenter.openShareWithGroupView(group,json);
    }

}