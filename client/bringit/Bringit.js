/**
 * Created by lucadario on 21/04/17.
 */

import {container, singleton, inject} from 'dependency-injection-es6';
import {ListData} from '../../data/ListData'
import {ListItem} from '../../data/ListItem'
import {showpopupitemad} from '../view/list/InputItem/view/inputitemscript';
import {SaveItemEvent} from '../event/SaveItemEvent';
import {showlayoutadd} from '../view/infoitem/layoutviewscript';


export class Bringit extends Monolith.bubble.BaseBubble {

    constructor(listName, listId = undefined){
        super();
        //resolve a object for save a new Item
        this._saveItemEvent = container.resolve(SaveItemEvent);



        //create unique id list
        if(listId == undefined) {
            listId = ('_' + Math.random().toString(36).substr(2, 9)).toString();
        }
        this._id = listId;
        //create and set the tittle of the list
        this._textNameList = new Monolith.widgets.TextWidget;
        this._textNameList.setText(listName);
        super.addComponent(this._textNameList);

        //set a array for contains the list of the itemWidget
        this._checklist = [];
        this._completionMessage = 'Checklist Completed!';


        //create a button for add the show a inputItem
        this._addItemButton = new Monolith.widgets.ButtonWidget;
        this._textAddItemButton = 'Add Item';
        this._addItemButton.renderView();
        this._addItemButton.setText(this._textAddItemButton);

        this._addItemButton.setOnClickAction(() => {
            this.showInputAddItem();
        });

        super.addComponent(this._addItemButton);

        this._saveItemEvent.on('saveEventItem',(item,listId) => {
            if(this._id == listId){
                this.addNewBringitItem(item);
            }

        });





    }


    /**
     * show the popUp for add a new item, it contains all the form for add all details
     */
    showInputAddItem(){
        showpopupitemad(this._id);



    }

    /**
     * add a new item in database
     * @param item {ListItem}
     */

    addNewBringitItem(item) {
        Meteor.subscribe('addItemInList',this._id,item);

    }



    /**
     * Update item in database
     * @param listItem {ListItem}
     */
    updateItem(listItem){
        Meteor.subscribe('updateItem',this._id,listItem);

    }

    /**
     *
     *Deletes all lists that have the id equal to this instance of Bringit from the all chat and database
     */

    deleteList(){
        //call a publish in server
        Meteor.subscribe('deleteList',this._id);
    }

    /**
     *Deletes all item that have the id equal to @param itemId from the all chat and database
     * @param itemId {string} Id of the Item I Want delete from the all list
     */

    deleteItem(itemId){
        Meteor.subscribe('deleteItem',this._id,itemId);
    }

    //provissorio

    /**
     *Create, and add in Bringit, a new Item with same details in listItem
     * @param listItem {ListItem}
     */

    addItemFromDb(listItem){

        //create check
        let itemCheck = new Monolith.widgets.checklist.ChecklistWidgetItem(listItem.getName(),listItem.getStatus(),listItem.getId());
        //create and set image
        let itemImage = new Monolith.widgets.ImageWidget;
        if(listItem.getImagePath() != '') {
            itemImage.setImage(listItem.getImagePath());
        }
        //create and set quantity
        let widgetQuantity = new Monolith.widgets.TextWidget;
        if(listItem.getQuantity() != undefined) {
            widgetQuantity.setText(listItem.getQuantity().toString());
        }


        //create and set unit
        let widgetUnity = new Monolith.widgets.TextWidget;
        if(listItem.getMeasurementUnit() != undefined) {
            widgetUnity.setText(listItem.getMeasurementUnit().toString());
        }

        //create widget description
        let widgetDescription = new Monolith.widgets.TextWidget;
        if(listItem.getDescription() != undefined) {
            widgetDescription.setText(listItem.getDescription().toString());
        }



        let layoutContainer = new Monolith.layout.HorizontalLayoutView;

        layoutContainer.addItem(itemCheck);
        layoutContainer.addItem(itemImage);
        layoutContainer.addItem(widgetQuantity);
        layoutContainer.addItem(widgetUnity);
        layoutContainer.addItem(widgetDescription);
        this._checklist.push(layoutContainer);

        //set action for click

        itemCheck.setOnClick(() => {
            listItem.setStatus(itemCheck.isChecked());
            this.updateItem(listItem);

        });


       // set action fot long click
        itemCheck.setOnLongClick(() => {

            showlayoutadd(layoutContainer);
        });

        super.addComponent(layoutContainer);

    }



}