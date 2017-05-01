/**
 * Created by lucadario on 24/03/17.
 *  * version 2.0.0 - Miss the notes on the popuop
 *   * version 4.1.0 - completed

 */

import {container, inject} from 'dependency-injection-es6';
import {CreateListViewImpl} from './view/CreateListViewImpl';
import {input} from '../../list/input/view/input.html';

/**
 * this script add a button for add list in RocketChat.tabBar with the config that return from CreateListViewImpl
 */
Meteor.startup(function () {
    Tracker.autorun(function () {
        let view = container.getInstanceOf(CreateListViewImpl);
        RocketChat.TabBar.addButton(
            view.renderView()
        )
    })
});


