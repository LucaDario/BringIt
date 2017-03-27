/**
 * Description: Class which represents all the data that are stored inside a list.
 * Created by Riccardo Montagnin on 21/03/2017.
 * Version 1.0.0 - Initial version
 */

import {ListItem} from "./ListItem";

export class ListData {

    constructor(){
        // Create a new ObjectID so that the id of the list will be unique
        ObjectID = Mongo.ObjectID;
        this._id = new ObjectID();

        this._imagePath = '';
        this._name = '';
        this._items = [];
        this._creatorId = '';
        this._users = [];
    }

    setId(id){
        this._id = id;
    }
    getId(){
        return this._id;
    }

    getImagePath() {
        return this._imagePath;
    }
    setImagePath(value) {
        this._imagePath = value;
    }

    getName() {
        return this._name;
    }
    setName(value) {
        this._name = value;
    }

    /**
     * Adds an item to the list of items present inside the list.
     * @param item {ListItem}: Item to be added.
     */
    addItem(item) {
        this._items.push(item);
    }

    /**
     * Removes an item from the list.
     * @param item {ListItem | Number}: Item to be removed or position of the item to be removed inside the items' list.
     */
    removeItem(item){
        let index;
        if (!isNaN(parseFloat(item)) && isFinite(item)){
            index = item;
        } else {
            index = this._getItemPosition(item);
        }

        if (index > -1) {
            this._items.splice(index, 1);
        }
    }

    /**
     * Saves an item inside the list. If the item is already present, it updates it; if it is not then it inserts it.
     * @param item {ListItem}: Item which needs to be saved.
     */
    saveItem(item){
        let position = this._getItemPosition(item);
        if(position > -1){
            // If the item is found, then update it
            this._items[position] = item;
        } else {
            // Otherwise just create a new one
            this.addItem(item);
        }
    }

    /**
     * Returns the position of a specific item inside the list, searching based on its id.
     * @param item {ListItem}: Item to search for.
     * @return {number}: The position of the item inside the list; <code>-1<code/> if not found.
     * @private
     */
    _getItemPosition(item){
        let position = -1;

        // Iterate searching for the position where the item is inside the list
        for(let i = 0; i < this._items.length; i++) {
            if (this._items[i].getId()._str === item.getId()._str) {
                position = i;
            }
        }

        return position;
    }

    getCreatorId() {
        return this._creatorId;
    }
    setCreatorId(value) {
        this._creatorId = value;
    }

    addUser(user){
        this._users.push(user);
    }
    hasUsersPermission(user){
        return this._users.includes(user);
    }

}