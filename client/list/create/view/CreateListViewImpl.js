/**
 * Created by lucadario on 23/03/17.
 */

import {CreateListView} from "../CreateListView"
import {CreateListViewPresenter} from "../presenter/CreateListViewPresenter"

export class CreateListViewImpl {

	_presenter;


	constructor() {

		this._presenter = new CreateListViewPresenter();
	}

	renderView(){

		return this._presenter.renderView();
	}
}

Meteor.startup(function () {
	Tracker.autorun(function () {
		let view = new CreateListViewImpl();

		console.log(view.renderView());
		RocketChat.TabBar.addButton(
			view.renderView()
		)
	})
});
