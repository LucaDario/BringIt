/**
 * Description: Interface which allows to communicate with the database to work with saved lists.
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
 * Version 1.0.0 - Initial version
 */

import {container, singleton, inject} from 'dependency-injection-es6';
import {ListData} from "../../data/ListData";
import {ListItem} from "../../data/ListItem";

export class DatabaseSource {

    /**
     * Public constructor.
     */
    constructor(){
        this._listCollection = new Mongo.Collection('lists');
    }

    /**
     * Creates a new list for the user with the given id.
     * @param userId {String}: Id of the user to which create a new list.
     * @return {ListData}: The list that has been created.
     */
    createListForUserWithId(userId){
        // Create the ListData
        let listData = new ListData();

        // Set the creator
        listData.setCreatorId(userId);

        // Add it to the database
        this._listCollection.insert(listData);

        return listData;
    }

    /**
     * Removes the list with the given id from the database.
     * @param listId {@code String}: Id of the list to be deleted from the database.
     */
    removeList(listId){
        this._listCollection.remove({_id : listId});
    }

    /**
     * Returns the list saved inside the database which has the given id.
     * @param listId {@code String}: Id of the list to retrieve.
     * @return {ListData}: The list that with the given id saved inside the database.
     */
    getListWithId(listId){
        let data = this._listCollection.findOne({_id : listId});
        return this._convertToListData(data);


    }

    /**
     * Saves the given list inside the database.
     * @param listData {ListData}: List to be saved inside the database.
     */
    saveList(listData){
        this._listCollection.upsert({_id: listData.getId()}, listData);
    }

    /**
     * Returns all the lists that are saved inside the database.
     * @return {ListData[]}: Array of the lists that are saved inside the database.
     */
    getLists(){
        let lists = [];
        this._listCollection.find({}).fetch().forEach(function (list) {
            lists.push(this._convertToListData(list));
        }, this);
        return lists;
    }

    /**
     * Returns the item which has the given id.
     * @param itemId {string}: Id of the item to be searched for.
     * @return {ListItem}: Item retrieved, if found.
     */
    getItemWithId(itemId){
        let list = this._listCollection.findOne({'_items._id' : itemId});
        let listData = this._convertToListData(list);
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

        return listItem;
    }

}

// Needed registering, so that each time a user wants an instance of this class it will get every time the same instance
container.registerAsSingleton(DatabaseSource);


/**
 * Tests.
 * TODO: Move this inside the proper testing environment
 */
Meteor.startup(function () {
    console.log('');
    console.log('=== DATABASE SOURCE ===');

    // For recursive printing
    const util = require('util');

    let source = container.resolve(DatabaseSource);

    console.log('Clearing the database');
    source.clear();

    console.log('Creating a list');

    let listData = source.createListForUserWithId(1); listData.setName('The best list ever made');
    let item1 = new ListItem(); item1.setDescription("First item");
    let item2 = new ListItem(); item1.setDescription("Second item");
    listData.addItem(item1); listData.addItem(item2);

    let listData2 = source.createListForUserWithId(1); listData2.setName('The best list ever made 2');
    let item11 = new ListItem(); item11.setDescription("First item");
    let item21 = new ListItem(); item21.setDescription("Second item");
    listData2.addItem(item11); listData2.addItem(item21);

    source.saveList(listData);
    source.saveList(listData2);

    // Should print an object with the proper data
    console.log('List created');
    console.log(util.inspect(source.getLists(), false, null));

    console.log('Retrieving an item');
    console.log(util.inspect(source.getItemWithId(item1.getId()), false, null));

    console.log('Removing the list');
    source.removeList(listData.getId());

    // Should return []
    console.log('Current database content: ');
    console.log(util.inspect(source.getLists(), false, null));

});