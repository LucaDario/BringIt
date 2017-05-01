/**
 * Created by manu on 21/04/17.
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
            let bubble = new Bringit(nameList,idList,checkPermission(message.listData));
            cloneItemFromJson(bubble,message.listData._items);
            console.log(message);

            return bubble;

        });
    }
});


function cloneItemFromJson(bubble, jsonItem) {

    for(let i = 0; i < jsonItem.length; i++){
        let listItem = new ListItem();
        //add all notes
        for(let j = 0; j < jsonItem[i]._notes.length; j++){
            listItem.addNote(jsonItem[i]._notes[j]);
        }


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

function checkPermission(listData) {
    let permission = false;

    for(let i = 0; i < listData._users.length; i++){
        if(listData._users[i] == Meteor.userId()){
            permission = true;
        }
    }
    return permission || (listData._creatorId == Meteor.userId());
}
