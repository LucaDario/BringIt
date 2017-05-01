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
     * @param layout: the layout where is present the item with the further information
     * @param listId: the id of the list where the item is present
     * @param item: the item  where the further information is present
     * @param permission: the permission if the user can modify or delete the list
     */

    showlayoutadd(layout,listId,item,permission) {


        let showPop = container.resolve(ShowPopupUseCase);

        const image = layout.getItems()[1].getPath();
        const description = layout.getItems()[4].getText();
        const name= layout.getItems()[0].getText();
        const quantity = layout.getItems()[2].getText();
        const unity = layout.getItems()[3].getText();

        let new_layout= new Monolith.layout.VerticalLayoutView;
        let new_image= new Monolith.widgets.ImageWidget;
        let new_textwidgets = new Monolith.widgets.TextWidget;
        let new_textQuantity = new Monolith.widgets.TextWidget;
        let newTextUnity = new Monolith.widgets.TextWidget;

        new_image.setImage(image);
        new_textwidgets.setText('descrizione: ' +description);
        new_textQuantity.setText('Quantià: ' +quantity);
        newTextUnity.setText('Unità di misura: ' +unity);



        new_image.setHeight(60);
        new_image.setWidth(60);
        new_layout.addItem(new_image);
        console.log(new_image);
        new_layout.addItem(new_textwidgets);
        new_layout.addItem(new_textQuantity);
        new_layout.addItem(newTextUnity);


        if(permission == true){
            showPop.showPopup(name,new_layout.renderView(),listId,item,1);

        }
        else{
            showPop.showPopup(name,new_layout.renderView(),listId,item);
        }


    }

}

container.registerAsSingleton(Showinfoitem);
