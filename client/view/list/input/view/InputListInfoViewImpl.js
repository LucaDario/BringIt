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
 * version 3.0.0 - bug fixes, on hold for other component
 */

import {InputListInfoView} from '../InputListInfoView';
import {InputListInfoViewPresenter} from '../presenter/InputListInfoViewPresenter';
import {container,inject} from 'dependency-injection-es6';
import {SaveListEvent} from '../../../../event/SaveListEventEmitter'

export class InputListInfoViewImpl extends InputListInfoView {


    /**
     * public constructor
     */
    constructor() {
        super();
        /**
         * @type {InputListInfoViewPresenter}: the reference of presenter
         */
        this._presenter = container.resolve(InputListInfoViewPresenter);
        /**
         * @type {SaveListEvent}: the singleto that emit the input for the list info
         */
        this._saveEvent = container.resolve(SaveListEvent);
    }

    /**
     *This Create a listData and call a emitSaveEvent on SalveEventClass whit ListData created
     * @param name of list {string}
     * @param photoList path {string}
     */
    onSaveClicked(name,photoList){
        const list = this._presenter.createListData(name,photoList);
        this._saveEvent.emitSaveEvent(list);

    }
}

