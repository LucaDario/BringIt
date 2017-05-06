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
    constructor() {

    }

    createListItem(name, image, quantity, long_description, mesaurement_unit) {
        let ListItem = new ListItem();

        //let widget_immagine= new Monolith.widgets.ImageWidget();

        //widget_immagine.setImage(image);
        // let widget_testo = new Monolith.widgets.TextWidget();

        // widget_testo.setText(name);


        //let widget_checklist = new Monolith.widgets.CheckListWidgetItem();
        // widget_checklist.createOption(name);

        ListItem.imagePath = image;
        ListItem._measurementUnit = mesaurement_unit;
        ListItem._name = name;
        ListItem._notes = [];
        ListItem._quantity = quantity;
        ListItem._description = long_description;

        return ListItem;

    }
}