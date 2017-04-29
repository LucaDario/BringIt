/**
 * Created by nicolo on 20/04/17.
 */

import {container, singleton, inject} from 'dependency-injection-es6';
import {ListItem} from '../../../../../data/ListItem';
import {ImageWidget} from 'meteor/monolith/client/component/widget/image/view/ImageWidget';

export class InputItemInfoViewPresenter {

    /**
     * public constructor
     *
     */
    constructor(view,listId) {
        this._view= view;
        this._listId = listId;
    }
    getListId(){
        return this._listId;
    }

    createListItem(name, image, quantity, long_description, mesaurement_unit) {
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