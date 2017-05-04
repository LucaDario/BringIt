
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
 * Version 2.0.0 - completed
 */

import {container,inject} from 'dependency-injection-es6';
import {DatabaseSource} from "../database/DatabaseSource";
import {ListData} from "../../data/ListData";
import {ListItem} from "../../data/ListItem";

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


