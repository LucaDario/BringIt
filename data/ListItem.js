/**
 * Description: Class which represents all the data that are stored inside a list item.
 * Created by Riccardo Montagnin on 21/03/2017.
 * Version 2.3.0 - completed
 */

export class ListItem {

    /**
     * Public constructor
     */
    constructor(){
        // Create a unique id
        ObjectID = Mongo.ObjectID;
        /**
         * @type {number}: unique id for the ListItem
         */
        this._id = new ObjectID();
        /**
         * @type {string}: string for the description of the imte
         */

        this._description = '';
        /**
         * @type {Blob} : Blob that represents the image that we want insert
         */
        this._imagePath = '';
        /**
         * @type {string}: the string that describe the unity of misure
         */
        this._measurementUnit = '';
        /**
         * @type {string}: the name of the item
         */
        this._name = '';
        /**
         * @type {string}: the notes
         */
        this._notes = [];
        /**
         * @type {string}: the quantity of the item
         */
        this._quantity = 0;
        /**
         * @type {boolean}: the boolean that describe the visualization of the item
         */
        this._status = false;
    }
    getStatus() {
        return this._status;
    }

    setStatus(value) {
        this._status = value;
    }

    getId() {
        return this._id;
    }
    setId(value) {
        this._id = value;
    }

    getDescription() {
        return this._description;
    }
    setDescription(value) {
        this._description = value;
    }

    getImagePath() {
        return this._imagePath;
    }
    setImagePath(value) {
        this._imagePath = value;
    }

    getMeasurementUnit() {
        return this._measurementUnit;
    }
    setMeasurementUnit(value) {
        this._measurementUnit = value;
    }

    getName() {
        return this._name;
    }
    setName(value) {
        this._name = value;
    }

    getNotes() {
        return this._notes;
    }
    getNote(postion){
        return this._notes[position];
    }

    /**
     * This method allows to add a specific note
     * @param {string} note: note that we want add
     */

    addNote(note) {
        this._notes.push(note);
    }

    /**
     * This method allows to remove a specific notes
     * @param {string} position: position of the note that we want remove
     */
    removeNote(position){
        this._notes.splice(position, 1);
    }

    getQuantity() {
        return this._quantity;
    }
    setQuantity(value) {
        this._quantity = value;
    }

}
