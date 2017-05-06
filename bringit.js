/**
 * Created by manu on 21/04/17.
 */
import {Bringit} from './client/bringit/Bringit'
import {container, singleton, inject} from 'dependency-injection-es6';

/**
 * Register the custom bubble 'Bringit' in monolith
 */
Meteor.startup(function () {
    if(Meteor.isClient) {
        Monolith.bubble.addBubble("Bringit", function (message) {
            console.log(message.listData);
            //create a list with a same parameter inside a message
            const idList = message.listData._id;
            const nameList = message.listData._name;
            const bubble = new Bringit(nameList,idList);
            bubble.cloneListItem(message._items);



            return bubble;

        });
    }
});