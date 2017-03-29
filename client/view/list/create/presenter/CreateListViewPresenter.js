/**
 * The Presenter of CreateListViewImpl
 * Created by lucadario on 23/03/17.
 */
import {inject} from 'dependency-injection-es6';

export class CreateListViewPresenter {

    /**
     * @constructor
     * Constructor of CreateListViewPresenter
     */
	constructor() {
		this._groups = ['channel', 'group', 'direct'];
		this._id = 'create-list';
		this._icon = 'icon-th-list';
		this._template = 'input';
		this._order = 5;
	}

    /**
	 * This return a Json Config for the button in RocketChat.TabBAr
     * @returns {{JSON}}
     */

	renderView(){
		return {
			"groups":this._groups,
			"id":this._id,
			"i18nTitle": 'list',
			"icon":this._icon,
			"template":this._template,
			"order":this._order
		}
	}


}
