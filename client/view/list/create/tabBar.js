/**
 * Created by lucadario on 24/03/17.
 */

import {container, inject} from 'dependency-injection-es6';
import {CreateListViewImpl} from './view/CreateListViewImpl';
import {CreateListViewImplContainer} from './view/CreateListViewImplContainer'
import {input} from '../../item/add/view/input.html';

/**
 * this script add a button for add list in RocketChat.tabBar with the config that return from CreateListViewImpl
 */
Meteor.startup(function () {
    Tracker.autorun(function () {
        let view = new CreateListViewImpl();
        console.log(view);
        RocketChat.TabBar.addButton(
            view.renderView()
        )
    })
});
