/**
 * Description: Interface which allows to communicate with the database to work with lists messages.
 * To obtain an instance of this class be sure to include the following code inside the class that uses it:
 * <code>
 *  // Needed import
 *  import {container} from 'dependency-injection-es6';
 *
 *  // This will get your instance
 *  var databaseSource = container.resolve(DatabaseSource);
 * <code/>
 *
 * Created by Riccardo Montagnin on 27/03/2017.
 * Version 7.8.0 - DatabaseSource now operates on messages instead of different entities, completed
 */

import {container} from 'dependency-injection-es6';
import {ListData} from "../../data/ListData";
import {ListItem} from "../../data/ListItem";

export class DatabaseSource {

    /**
     * Public constructor.
     */
    constructor(){
        // this._listCollection = new Mongo.Collection('lists');
        this._listCollection = RocketChat.models.Messages;
    }

    /**
     * Removes the list with the given id from the database.
     * @param listId {@code String}: Id of the list to be deleted from the database.
     */
    removeList(listId){
        const cursor = this._listCollection.find({'listData._id' : listId});
        cursor.forEach(function (message) {
            Meteor.runAsUser(message.listData._creatorId, () => {
                Meteor.call('deleteMessage',{_id: message._id})

            });

        })
    }

    /**
     * Returns the list saved inside the database which has the given id.
     * @param listId {@code String}: Id of the list to retrieve.
     * @return {ListData}: The list that with the given id saved inside the database.
     */
    getListWithId(listId){
        let message = this._listCollection.findOne({'listData._id' : listId});
        return this._convertToListData(message.listData);
    }

    /**
     * Saves the given list inside the database.
     * @param listData {ListData}: List to be saved inside the database.
     */
    saveList(listData){
        const cursor = this._listCollection.find({'listData._id' : listData._id});
        cursor.forEach(function (message) {
            Meteor.runAsUser('rocket.cat', () => {

                Meteor.call('updateMessage',{_id : message._id, msg:'', listData : listData, rid:message.rid})

             });

        })


    }

    /**
     * Returns all the lists that are saved inside the database.
     * @return {ListData[]}: Array of the lists that are saved inside the database.
     */
    getLists(){
        let lists = [];
        this._listCollection.find({listData : {$exists : true}}).fetch().forEach(function (message) {
            lists.push(this._convertToListData(message.listData));
        }, this);
        return lists;
    }

    /**
     * Returns the item which has the given id.
     * @param itemId {string}: Id of the item to be searched for.
     * @return {ListItem}: Item retrieved, if found.
     */
    getItemWithId(itemId){
        let message = this._listCollection.findOne({'listData._items._id' : itemId});
        let listData = this._convertToListData(message.listData);
        return listData.getItembById(itemId);
    }

    /**
     * Removes all the documents from all the collections.
     */
    clear(){
        this._listCollection.remove({});
    }

    /**
     * Converts the given object to a {ListData}.
     * @param data {Object}: Object that needs to be converted.
     * @return {ListData}: List containing the same information passed as parameter.
     * @private
     */
    _convertToListData(data){
        let listData = new ListData();
        listData.setName(data._name);
        listData.setCreatorId(data._creatorId);
        listData.setId(data._id);
        listData.setImagePath(data._imagePath);
        if(data._items !== undefined){
            data._items.forEach(function (item) {
                listData.addItem(this._convertToListItem(item));
            }, this);
        }
        if(data._users !== undefined){
            data._users.forEach(function (user) {
                listData.addUser(user);
            })
        }

        return listData;

    }

    /**
     * Converts the given {Object} into a {ListItem}.
     * @param item {Object}: Object which holds the data that needs to be extracted to create the {ListItem}.
     * @return {ListItem}: Item which holds all the information that was present inside the given object.
     * @private
     */
    _convertToListItem(item){
        let listItem = new ListItem();
        listItem.setId(item._id);
        listItem.setName(item._name);
        listItem.setDescription(item._description);
        listItem.setImagePath(item._imagePath);
        listItem.setMeasurementUnit(item._measurementUnit);
        listItem.setQuantity(item._quantity);
        if(item._notes !== undefined){
            item._notes.forEach(function (note) {
                listItem.addNote(note);
            });
        }
        listItem.setStatus(item._status);
        return listItem;
    }

}

// Needed registering, so that each time a user wants an instance of this class it will get every time the same instance
container.registerAsSingleton(DatabaseSource);


/**
 * Tests.
 * TODO: Move this inside the proper testing environment
 */
/*Meteor.startup(function () {
    if(Meteor.isServer){
        console.log('');
        console.log('=== DATABASE SOURCE ===');

        // For recursive printing
        const util = require('util');

        let source = container.resolve(DatabaseSource);

        console.log(util.inspect(source.getLists(), false, null));

        // console.log('Clearing the database');
        // source.clear();
        //
        // console.log('Creating a list');
        //
        // let listData = source.createListForUserWithId(1); listData.setName('The best list ever made');
        // let item1 = new ListItem(); item1.setDescription("First item");
        // let item2 = new ListItem(); item1.setDescription("Second item");
        // listData.addItem(item1); listData.addItem(item2);
        //
        // let listData2 = source.createListForUserWithId(1); listData2.setName('The best list ever made 2');
        // let item11 = new ListItem(); item11.setDescription("First item");
        // let item21 = new ListItem(); item21.setDescription("Second item");
        // listData2.addItem(item11); listData2.addItem(item21);
        //
        // source.saveList(listData);
        // source.saveList(listData2);
        //
        // // Should print an object with the proper data
        // console.log('List created');
        // console.log(util.inspect(source.getLists(), false, null));
        //
        // console.log('Retrieving an item');
        // console.log(util.inspect(source.getItemWithId(item1.getId()), false, null));
        //
        // console.log('Removing the list');
        // source.removeList(listData.getId());
        //
        // // Should return []
        // console.log('Current database content: ');
        // console.log(util.inspect(source.getLists(), false, null));
    }

});*/