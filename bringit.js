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
            //create a list with a same parameter inside a message
            const idList = message.listData._id;
            const nameList = message.listData._name;

            let bubble = new Bringit(nameList,idList);
            cloneItemFromJson(bubble,message.listData._items);

            return bubble;

        });
    }
});


function cloneItemFromJson(bubble, jsonItem) {

    for(let i = 0; i<jsonItem.length; i++){

        bubble.addItemFromDb(jsonItem[i]._id, jsonItem[i]._name, jsonItem[i]._status,
            jsonItem[i]._description, jsonItem[i]._measurementUnit,jsonItem[i]._quantity,
            jsonItem[i]._imagePath);

    }

    
}
