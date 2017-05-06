/**
 * Implementation a generic view InputListView and allow to get a information that the user insert in the
 * view
 * * <code>
 *     //need import
 *
 *     import {InputListInfoView} from '../InputListInfoView';
 *  import {InputListInfoViewPresenter} from '../presenter/InputListInfoViewPresenter';
 *  import {container,inject} from 'dependency-injection-es6';
 *      import {SaveListEvent} from '../../../../event/SaveListEvent'
 *
 *
 * Created by lucadario on 27/03/17.
 */

import {InputListInfoView} from '../InputListInfoView';
import {InputListInfoViewPresenter} from '../presenter/InputListInfoViewPresenter';
import {container,inject} from 'dependency-injection-es6';
import {SaveListEvent} from '../../../../event/SaveListEvent'

export class InputListInfoViewImpl extends InputListInfoView {


    /**
     * public constructor
     */
    constructor() {
        super();
        this._presenter = container.resolve(InputListInfoViewPresenter);
        this._saveEvent = container.resolve(SaveListEvent);
    }

    /**
     *This Create a listData and call a emitSaveEvent on SalveEventClass whit ListData created
     * @param name of list {string}
     * @param photoList path {string}
     */
    onSaveClicked(name,photoList){
        let list = this._presenter.createListData(name,photoList);
        this._saveEvent.emitSaveEvent(list);

    }
}

