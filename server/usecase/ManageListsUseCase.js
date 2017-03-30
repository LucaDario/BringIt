/**
 * Description: Class which represents the use case that helps creating, deleting and working with lists saved inside the
 * database.
 * To obtain an instance of this class be sure to include the following code inside the class that uses it:
 * <code>
 *  // Needed import
 *  import {container} from 'dependency-injection-es6';
 *
 *  // This will get your instance
 *  var modifyListUseCase = container.resolve(ManageListsUseCase);
 * <code/>
 * Created by Riccardo Montagnin on 27/03/2017.
 * Version 1.0.0 - Initial version
 */

import {container,inject} from 'dependency-injection-es6';
import {DatabaseSource} from "../database/DatabaseSource";
import {ListData} from "../../data/ListData";

export class ManageListsUseCase {

    /**
     * Public constructor.
     */
    constructor(){
        this._databaseSource = container.getInstanceOf(DatabaseSource);
    }

    /**
     * Creates a list for the user with the given id.
     * @param userId {string}: Id of the user for which to create the list.
     * @param listData {ListData | undefined}: If present, the data which will be saved.
     * @return {ListData}: Object representing the just created list.
     */
    createList(userId, listData){
        let list;

        if(listData !== undefined){
            // If the data given is not undefined than use it
            list = listData;
        } else {
            // Otherwise create a new list
           list = this._databaseSource.createListForUserWithId(userId)
        }

        // Save the list into the database and return it
        this._databaseSource.saveList(list);

        // Return it
        return list;
    }

    /**
     * Deletes a list from the database.
     * @param listId {string}: Id of the list which will be deleted.
     */
    deleteList(listId){
        this._databaseSource.removeList(listId);
    }

}

// Register the class as a singleton so that each instance that is injected is always the same
container.registerAsSingleton(ManageListsUseCase);

Meteor.startup(function () {
    if(Meteor.isServer){
        console.log('');
        console.log('=== MANAGE LISTS USE CASE ===');

        // For recursive printing
        const util = require('util');

        let useCase = container.getInstanceOf(ManageListsUseCase);
        console.log('Clear database');
        useCase._databaseSource.clear();
        console.log(useCase._databaseSource.getLists());

        console.log('Performing some tests');

        let listData = new ListData();
        listData.setName('Tryout');

        console.log('List insertion with data');
        let insertedList1 = useCase.createList(1, listData);
        console.log(util.inspect(useCase._databaseSource.getLists(), false, null));

        console.log('List insertion without data');
        useCase.createList(2);
        console.log(util.inspect(useCase._databaseSource.getLists(), false, null));

        console.log('List removing');
        useCase.deleteList(insertedList1.getId());
        console.log(util.inspect(useCase._databaseSource.getLists(), false, null));

    }
});