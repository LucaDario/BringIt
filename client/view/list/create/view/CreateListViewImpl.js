/**
 * Created by lucadario on 23/03/17.
 */

import {container,inject} from 'dependency-injection-es6';
import {CreateListView} from "../CreateListView";
import {CreateListViewPresenter} from "../presenter/CreateListViewPresenter";

export default class CreateListViewImpl extends CreateListView {

	constructor() {
        super();
		// This should resolve the dependency and inject the presenter
		this._presenter = container.resolve(CreateListViewPresenter); // Works
	}

	renderView(){
		return this._presenter.renderView();
	}
}


// NOTE: This code CANNOT go into the interface as it will produce an error
// Meteor.startup(function () {
// 	Tracker.autorun(function () {
// 		let view = new CreateListViewImpl();
//
// 		console.log(view.renderView());
// 		RocketChat.TabBar.addButton(
// 			view.renderView()
// 		)
// 	})
// });
