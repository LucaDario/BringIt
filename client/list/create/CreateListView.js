/**
 * Base Abstract class represents the generic
 * Created by lucadario on 23/03/17.
 */
import {CreateListViewImpl} from '../create/view/CreateListViewImpl'
export class CreateListView {

	/**
	 * Public constructor. If called directly it will produce an exception as this class is abstract.
	 */
	constructor() {
		/*if (this instanceof CreateListView) {
			throw new TypeError("Cannot construct CreateListView instances directly");
		}*/
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



