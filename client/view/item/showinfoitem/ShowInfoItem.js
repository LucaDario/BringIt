/**
 * Created by nicolo on 29/04/17.
 * This class allows to show the further information
 * version 3.2.0 - Miss the notes on the popuop
 */

import {container, singleton, inject} from 'dependency-injection-es6';
import {ShowPopupUseCase} from '../../../usecase/ShowPopupUseCase';

export class Showinfoitem {

    /**
     * Public constructor. If called directly it will produce an exception as this class is abstract.
     */
    constructor() {
        /**
         * @type{ShowPopupUseCase}: This resolve the singleton for the popup that we want show
         */
        this._popup= container.resolve(ShowPopupUseCase);
    }

    /**
     * this method show at the screen of rocket chat the further info of the item
     * @param listId: the id of the list where the item is present
     * @param item: the item  where the further information is present
     * @param permission: the permission if the user can modify or delete the list
     */

    showlayoutadd(listId,item,permission) {

        const image = item.getImagePath();
        const description = item.getDescription();
        const name= item.getName();
        const quantity = item.getQuantity();
        const unity = item.getMeasurementUnit();

        const new_layout= new Monolith.layout.VerticalLayoutView;
        const new_image= new Monolith.widgets.ImageWidget;
        const new_textwidgets = new Monolith.widgets.TextWidget;
        const new_textQuantity = new Monolith.widgets.TextWidget;
        const newTextUnity = new Monolith.widgets.TextWidget;

        new_textwidgets.setFormatText(true);
        new_textQuantity.setFormatText(true);
        newTextUnity.setFormatText(true);

        new_textwidgets.setTextColor('#fff');
        new_textQuantity.setTextColor('#fff');
        newTextUnity.setTextColor('#fff');

        new_image.setImage(image);
        new_textwidgets.setText('*Description: *' + description);
        new_textQuantity.setText('*Quantity: *' + quantity);
        newTextUnity.setText('*Measure Unit: *' + unity);

        new_image.setHeight(60);
        new_image.setWidth(60);
        new_layout.addItem(new_image);
        new_layout.addItem(new_textwidgets);
        new_layout.addItem(new_textQuantity);
        new_layout.addItem(newTextUnity);


        if(permission === true){
            this._popup.showPopup(name,new_layout.renderView(),listId,item,1);

        }
        else{
            this._popup.showPopup(name,new_layout.renderView(),listId,item);
        }
    }

}

container.registerAsSingleton(Showinfoitem);
