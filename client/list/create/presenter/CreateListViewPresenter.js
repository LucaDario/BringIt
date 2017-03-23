/**
 * Created by lucadario on 23/03/17.
 */

export class CreateListViewPresenter{

	_groups;
	_id;
	_icon;
	_template;
	_order;

	constructor() {
		this._groups = ['channel', 'group', 'direct'];
		this._id = 'create-list';
		this._icon = 'icon-th-list';
		this._template = 'input';
		this._order = 5;
	}

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
