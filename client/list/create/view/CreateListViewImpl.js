/**
 * A concrete class and this exstend from CreateListView, represents a button to show a view for adding a list
 * Created by lucadario on 23/03/17.
 */

import {CreateListView} from "../CreateListView"
import {CreateListViewPresenter} from "../presenter/CreateListViewPresenter"

export class CreateListViewImpl extends CreateListView{


    /**
	 * @type{CreateListViewPresenter}: presenter of CreateListViewImpl
     */
	_presenter;


	constructor() {
		super();
		this._presenter = new CreateListViewPresenter();
	}

    /**
	 *
     * @returns {JSON} return a config of button for adding list
     */
	renderView(){

		return this._presenter.renderView();
	}
}

