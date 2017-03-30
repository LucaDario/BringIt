/**Description: This represents a presenter of CreateListViewImpl, this contains the parameters to
 * config for create a button in tab-flex-bar and create a list into database in server
 *
 * <code>
 *     //need import
 *     import {container, singleton, inject} from 'dependency-injection-es6';
 *
 *     // This will get your instance
 *  var createListViewPresenter = container.resolve(CreateListViewPresenter);
 * </code>
 * Created by lucadario on 29/03/17.
 */

import {container, singleton, inject} from 'dependency-injection-es6';


export class CreateListViewPresenter {

    /**
     * public @constructor
     *
     */
	constructor() {
		this._groups = ['channel', 'group', 'direct'];
		this._id = 'create-list';
		this._icon = 'icon-th-list';
		this._template = 'input';
		this._order = 5;
	}

    /**Public
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

    /**Public
	 * Subscribe method with name 'createList' with listData as a parameter
     * @param listData {ListData}
     */
	createList(listData){
		Meteor.subscribe('createList',listData);
	}


}

// Needed registering, so that each time a user wants an instance of this class it will get every time the same instance
container.registerAsSingleton(CreateListViewPresenter);
