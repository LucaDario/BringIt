/**
 * Description: Class which represents the use case that helps creating, deleting and working with lists saved inside the
 * database.
 * To obtain an instance of this class be sure to include the following code inside the class that uses it:
 * <code>
 *  // Needed import
 *  import {container} from 'dependency-injection-es6';
 *
 *  // This will get your instance
 *  var modifyListUseCase = container.resolve(GetListInfoUseCase);
 * <code/>
 * Created by Riccardo Montagnin on 27/03/2017.
 * Version 1.0.0 - Initial version
 */

import {container,inject} from 'dependency-injection-es6';
import {DatabaseSource} from '../server/database/DatabaseSource';
import {ListData} from '../data/ListData';

export class GetListInfoUseCase {

    /**
     * Public constructor.
     */
    constructor(){
        this._databaseSource = container.resolve(DatabaseSource);
    }

    /**
     * Gets the data of the list with the given id.
     * @param listId {string}: Id of the list that needs to be retrieved.
     * @return {ListData}: Object representing the retrieved list.
     */
    getListData(listId){
        return this._databaseSource.getListWithId(listId);
    }

}

// Register the class as a singleton so that each instance that is injected is always the same
container.registerAsSingleton(GetListInfoUseCase);

/**
 * Tests.
 * TODO: Move this inside the proper testing environment
 */
// Meteor.startup(function () {
//     console.log('');
//     console.log('=== GET LIST INFO USE CASE ===');
//
//     // For recursive printing
//     const util = require('util');
//
//     let useCase = container.resolve(GetListInfoUseCase);
//
//     console.log('Inserting a list');
//
//     let listData = useCase._databaseSource.createListForUserWithId(1);
//     listData.setName('The best list ever made');
//     let item1 = new ListItem(); item1.setDescription("First item");
//     let item2 = new ListItem(); item1.setDescription("Second item");
//
//     listData.addItem(item1);
//     listData.addItem(item2);
//
//     useCase._databaseSource.saveList(listData);
//
//     // Should print an object with the proper data
//     console.log('List created');
//
//     console.log('Retrieving data');
//     console.log(useCase.getListData(listData.getId()));
//
// });