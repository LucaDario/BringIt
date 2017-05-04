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
 * Version 2.0.0 - completed
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
    getItemInfo(listId,itemId){
        return this._databaseSource.getItemWithId(itemId);
    }

}

// Register the class as a singleton so that each instance that is injected is always the same
container.registerAsSingleton(GetItemInfoUseCase);


