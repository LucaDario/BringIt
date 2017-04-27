/**
 * Description: Class which represents all the data that are stored inside a list item.
 * Created by Riccardo Montagnin on 21/03/2017.
 * Version 1.0.0 - Initial version
 */

export class ListItem {

    constructor(){
        // Create a unique id
        ObjectID = Mongo.ObjectID;
        this._id = new ObjectID();

        this._description = '';
        this._imagePath = '';
        this._measurementUnit = '';
        this._name = '';
        this._notes = [];
        this._quantity = 0;
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

    addNote(note) {
        this._notes.push(note);
    }
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
