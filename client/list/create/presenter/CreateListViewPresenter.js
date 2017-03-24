/**
 * The Presenter of CreateListViewImpl
 * Created by lucadario on 23/03/17.
 */

export class CreateListViewPresenter{

    /**
	 * @type{Object} this represents the list of the groups that have access a button
     */
	_groups;
    /**
	 * @type{string} this represent a unique of the button
     */
	_id;
    /**
	 * @type{string} this represents a name of the icon, http://fontello.github.io/typicons.font/demo.html
     */
	_icon;
    /**
	 * @type{string} this represents a name of the template.html that should appears when click button
     */
	_template;
    /**
	 * @type{int} this represent the position the button
     */
	_order;

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
		return{
				"groups":this._groups,
				"id":this._id,
				"i18nTitle": 'list',
				"icon":this._icon,
				"template":this._template,
				"order":this._order
				}
	}


}
