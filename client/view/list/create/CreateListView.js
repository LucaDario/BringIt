/**
 * Created by lucadario on 23/03/17.
 */

import {container,inject} from 'dependency-injection-es6';
import {GeneralView} from "../../../GeneralView";
import {CreateListViewPresenter} from "./presenter/CreateListViewPresenter";

export class CreateListView extends GeneralView {

	constructor() {
        super();

		// Resolve the dependency and inject the presenter
        this._presenter = container.getInstanceOf(CreateListViewPresenter);
	}

	renderView(){
		return this._presenter.renderView();
	}
}
