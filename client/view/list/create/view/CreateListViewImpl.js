/**
 * Implementation a generic of CreateListView, this allow create a config for a create button to flex-tab-bar
 * and this class allow a receive a listData when the user press 'SaveLIst' in {InputLIstInfoViewImpl) and send this
 * list in 'database'
 * Created by lucadario on 23/03/17.
 *  * version 3.4.0 - completed

 */

import {container,inject} from 'dependency-injection-es6';
import {CreateListView} from "../CreateListView";
import {CreateListViewPresenter} from "../presenter/CreateListViewPresenter";
import {SaveListEvent} from '../../../../event/SaveListEventEmitter';
import {ListData} from '../../../../../data/ListData';

export class CreateListViewImpl extends CreateListView {


    /**
	 * public constructor
     */
	constructor() {
        super();
        // This should resolve the dependency and inject the presenter
        this._presenter = container.resolve(CreateListViewPresenter); // Works
        this._saveEvent = container.resolve(SaveListEvent); //works
		/*instance a function and it allows to call this presenter with the argument not defined in this moment
		* this will be defined when the function will be called from this._saveEvent.on
		* the not defined parameter must have ListData type*/
        let callFunction = function () {
			if(arguments[1] instanceof ListData) {
                this._presenter.createList(arguments[1]);
            }
        };

        //override of EventEmitter method
        this._saveEvent.on('saveEvent', callFunction.bind(this,arguments));

    }


    /**
	 * This method returned a Json config for flex-tab-bar
     * @returns {*|{JSON}|String}
     */
	renderView(){
		return this._presenter.renderView();
	}

    /**
     * Getter presenter
     * @returns {CreateListViewPresenter}
     */
    get presenter() {
        return this._presenter;
    }

    /**
     * Setter presenter
     * @param presenter {CreateListViewPresenter}
     */
    set presenter(presenter) {
        this._presenter = presenter;
    }


}

