/**
 * Description: Class which represents the use case that helps creating, deleting and working with lists saved inside the
 * database.
 * To obtain an instance of this class be sure to include the following code inside the class that uses it:
 * <code>
 *  // Needed import
 *  import {container} from 'dependency-injection-es6';
 *
 *  // This will get your instance
 *  var modifyListUseCase = container.resolve(GetItemInfoUseCase);
 * <code/>
 * Created by Riccardo Montagnin on 27/03/2017.
 * Version 1.0.0 - Initial version
 */

import {container,inject} from 'dependency-injection-es6';
import {DatabaseSource} from "../../server/database/DatabaseSource";
import {ListItem} from "../../data/ListItem";

export class GetItemInfoUseCase {

    constructor(){
        this._databaseSource = container.resolve(DatabaseSource);
    }

    /**
     * Gets the information of a specific item given its id.
     * @param itemId {string}: Id of the item which needs to be retrieved.
     * @return {ListItem}: Object representing the retrieved item.
     */
    getItemInfo(itemId){
        return this._databaseSource.getItemWithId(itemId);
    }

}

// Register the class as a singleton so that each instance that is injected is always the same
container.registerAsSingleton(GetItemInfoUseCase);

/**
 * Tests.
 * TODO: Move this inside the proper testing environment
 */
/*
Meteor.startup(function () {
    console.log('');
    console.log('=== GET ITEM INFO USE CASE ===');

    // For recursive printing
    const util = require('util');

    let useCase = container.resolve(GetItemInfoUseCase);

    console.log('Inserting some lists');

    let listData = useCase._databaseSource.createListForUserWithId(1);
    listData.setName('The best list ever made');
    let item1 = new ListItem(); item1.setDescription("First item");
    let item2 = new ListItem(); item1.setDescription("Second item");

    listData.addNewBringitItem(item1);
    listData.addNewBringitItem(item2);

    let listData2 = useCase._databaseSource.createListForUserWithId(3);
    listData.setName('The best list ever made 2');
    let item11 = new ListItem(); item1.setDescription("First item 2");
    let item21 = new ListItem(); item1.setDescription("Second item 2");

    listData2.addNewBringitItem(item11);
    listData2.addNewBringitItem(item21);

    useCase._databaseSource.saveList(listData);
    useCase._databaseSource.saveList(listData2);

    // Should print an object with the proper data
    console.log('Retrieving items 1 and 11');
    console.log(useCase.getItemInfo(item1.getId()));
    console.log(useCase.getItemInfo(item21.getId()));

});
    */

