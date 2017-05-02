/**
 * Created by nicolo on 20/04/17.
 * class which create the item with the correct param
 * version 3.0.0 - Completed
 */

import {container, singleton, inject} from 'dependency-injection-es6';
import {ListItem} from '../../../../../data/ListItem';

export class InputItemInfoViewPresenter {

    /**
     * public constructor
     *
     */
    constructor(view,listId) {
        /**
         * @type {InpuItemInfoView} this is a reference at the InputItemInfoView
         */
        this._view= view;
        /**
         * @type {number} this is the id of the list
         */
        this._listId = listId;
    }

    /**
     *This method return the listId wehere is the item
     * @reutrn {number}: return the id of the list
     */

    getListId(){
        return this._listId;
    }


    /**
     * @method
     * This method return the listid of the item that you want modify.
     * @param name {string}: the name of the item that you want create
     * @param image {blob}: the blob of the image of the item that you want create
     * @param quantity{number} : the quantity of the item that you want create
     * @param long_description {string} : the description of the item that you want create
     * @mesaurement_unit {string} : the unit of measure of the item that you want create
     * @return {ListItem}: the listItem that you want create
     */

    createListItem(name, image, quantity, long_description, mesaurement_unit = "") {
        let listItem = new ListItem();

        //let widget_immagine= new Monolith.widgets.ImageWidget();

        //widget_immagine.setImage(image);
        // let widget_testo = new Monolith.widgets.TextWidget();

        // widget_testo.setText(name);


        //let widget_checklist = new Monolith.widgets.CheckListWidgetItem();
        // widget_checklist.createOption(name);

        listItem.setImagePath(image);
        listItem.setMeasurementUnit(mesaurement_unit);
        listItem.setName(name);

        //TODO aggiungere note sia view
        listItem._notes = [];
        listItem.setQuantity(quantity);
        listItem.setDescription(long_description);

        return listItem;

    }
}
