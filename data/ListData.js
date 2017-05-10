/**
 * Description: Class which represents all the data that are stored inside a list.
 * Created by Riccardo Montagnin on 21/03/2017.
 * Version 3.0.0 - completed
 */

import {ListItem} from "./ListItem";

export class ListData {

    /**
     * Public constructor
     */
    constructor(){
        // Create a new ObjectID so that the id of the list will be unique
        ObjectID = Mongo.ObjectID;
        /**
         * @type {number}: unique id for the ListData
         */
        this._id = new ObjectID();
        /**
         * @type {Blob}: blob that represent the image that we want
         */

        this._imagePath = '';
        /**
         * @type {string}: the string taht represent the name of the list
         */
        this._name = '';
        /**
         * @type {item}: array that contain all the item in the list
         */
        this._items = [];
        /**
         * @type {number}: number that represent the id of the creator
         */
        this._creatorId = '';
        /**
         * @type {string}: array with the user that allows to interact with the list
         */
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
        if(value === ''){
            value = 'List';
        }
        this._name = value;
    }

    /**
     * Adds an item to the list of items present inside the list.
     * @param item {ListItem}: Item to be added.
     */
    addItem(item) {
        this._items.push(item);
    }

    getItembById(itemId){
        let position = this._getItemPositionById(itemId);
        return this._items[position];
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
        return this._getItemPositionById(item.getId());
    }

    /**
     * Return the position of a specific item
     * @param {string} itemId: the item of which we want position
     * @return {number} position: return the position of the item in the param
     */
    _getItemPositionById(itemId){
        let position = -1;

        // Iterate searching for the position where the item is inside the list
        for(let i = 0; i < this._items.length; i++) {
            if (this._items[i].getId()._str === itemId._str) {
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

    /**
     * method that allows to add a user in the list
     * @param user{string}: user that we want add at the list
     */
    addUser(user){
        this._users.push(user);
    }

    /**
     * method that check if a user have permission
     * @param {string} user: user that we want check if have permission
     * @return {boolean}: return true if the user in the param have permission
     */
    hasUsersPermission(user){
        return this._users.includes(user);
    }




}


