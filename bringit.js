/**
 * Created by manu on 21/04/17.
 * version 3.3.0 - add some function for testing, now this file can be implemented in other file,
 * on hold
 */
import {Bringit} from './client/bringit/Bringit'
import {container, singleton, inject} from 'dependency-injection-es6';
import {ListItem} from './data/ListItem';

/**
 * Register the custom bubble 'Bringit' in monolith
 */
Meteor.startup(function () {
    if(Meteor.isClient) {
        Monolith.bubble.addBubble("Bringit", function (message) {
            //create a list with a same parameter inside a message
            const idList = message.listData._id;
            const nameList = message.listData._name;
            const bubble = new Bringit(nameList,idList,checkPermission(message.listData));
            cloneItemFromJson(bubble,message.listData._items);

            return bubble;

        });
    }
});

/**
 * @function
 * This function creates a listItem from a json message and adds the element into the list.
 * @param bubble : the bubble in which the element will be added
 * @param jsonItem : the json which represents the item
 */

function cloneItemFromJson(bubble, jsonItem) {

    for(let i = 0; i < jsonItem.length; i++){
        const listItem = new ListItem();
        //add all notes
        for(let j = 0; j < jsonItem[i]._notes.length; j++){
            listItem.addNote(jsonItem[i]._notes[j]);
        }

        //setting of the correct parameters of the list
        listItem.setName(jsonItem[i]._name);
        listItem.setId(jsonItem[i]._id);
        listItem.setStatus(jsonItem[i]._status);
        listItem.setDescription(jsonItem[i]._description);
        listItem.setMeasurementUnit(jsonItem[i]._measurementUnit);
        listItem.setQuantity(jsonItem[i]._quantity);
        listItem.setImagePath(jsonItem[i]._imagePath);
        bubble.addItemFromDb(listItem);
    }
    
}

/**
 * @function
 * This function, with a given list, detects if a user has the permission to add and
 * remove element from the lists.
 * @param listData : the list which has the _user field
 * @return {boolean} : returns true if an user has the permissions, otherwise it returns false.
 */

function checkPermission(listData) {
    let permission = false;

    for(let i = 0; i < listData._users.length; i++){
        if(listData._users[i] === Meteor.userId()){
            permission = true;
        }
    }
    return permission || (listData._creatorId === Meteor.userId());
}
