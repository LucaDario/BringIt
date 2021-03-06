/**
 * Description: Class which represents the use case that helps sharing a list with a new user.
 * To obtain an instance of this class be sure to include the following code inside the class that uses it:
 * <code>
 *  // Needed import
 *  import {container} from 'dependency-injection-es6';
 *
 *  // This will get your instance
 *  var shareListUseCase = container.resolve(ShareListUseCase);
 * <code/>
 * Created by Riccardo Montagnin on 29/03/2017.
 * Version 2.0.0 - completed
 */

import {container,inject} from 'dependency-injection-es6';
import {DatabaseSource} from "../database/DatabaseSource";

export class ShareListUseCase{

    /**
     * Public constructor.
     */
    constructor(){
        this._databaseSource = container.resolve(DatabaseSource);
    }

    /**
     * Shares a list with a specific contact.
     * @param listId {Object}: Id of the list to share.
     * @param contactId {string}: Id of the contact to which share the chat with.
     */
    shareListWithContact(listId, contactId){
        // Add the contact to the list
        const listData = this._databaseSource.getListWithId(listId);
        listData.addUser(contactId);
        this._databaseSource.saveList(listData);

    }

    removeListPermission(listId, contactId){
        const listData = this._databaseSource.getListWithId(listId);
        listData.removeUser(contactId);
        this._databaseSource.saveList(listData);
    }

}

// Be sure that each instance of this class that will be injected is always the same
container.registerAsSingleton(ShareListUseCase);
