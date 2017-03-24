/**
 * Created by lucadario on 24/03/17.
 */

import {CreateListViewImpl} from './view/CreateListViewImpl'

/**
 * this script add a button for add list in RocketChat.tabBar with the config that return from CreateListViewImpl
 */
Meteor.startup(function () {
    Tracker.autorun(function () {
        let view = new CreateListViewImpl();
        RocketChat.TabBar.addButton(
            view.renderView()
        )
    })
});
