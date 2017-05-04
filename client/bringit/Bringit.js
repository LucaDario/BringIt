/**
 * Created by lucadario on 21/04/17.
 * version 8.1.0 - only miss the notes in the bubble and the forward
 */

import {container, singleton, inject} from 'dependency-injection-es6';
import {ListItem} from '../../data/ListItem'
import {ShowPopupUseCase} from '../usecase/ShowPopupUseCase';
import {SaveItemEvent} from '../event/SaveItemEventEmitter';
import {Showinfoitem}  from '../view/item/showinfoitem/ShowInfoItem';
import {CompleteListEventEmitter} from '../event/CompleteListEventEmitter';
import {DeleteItem} from '../event/DeleteItemEventEmitter';


export class Bringit extends Monolith.bubble.BaseBubble {

    /**
     * Public constructor
     * @param listName {string} : name of the list
     * @param listId {string} : id of the list
     * @param permission {boolean} : true if the user has the permissions to add or remove items
     * in the list
     */
    constructor(listName, listId, permission){
        super();
        this._permission = permission;

        //resolve a object for save a new Item
        this._saveItemEvent = container.resolve(SaveItemEvent);
        this._completeEvent = container.resolve(CompleteListEventEmitter);
        this._shoPopupUseCase = container.resolve(ShowPopupUseCase);
        this._deleteItemEvent = container.resolve(DeleteItem);

        //add a callback at a complete list event
        this._completeEvent.on('completeEvent',(listId,listName) => {

            if(listId === this._id){
                this._shoPopupUseCase.showPopup('Lista '+listName, this._COMPLETE_POPUP_TEXT);
            }
        });

        //add callback at a delete item event
        this._deleteItemEvent.on('DeleteItem',(listId,item) => {
            Meteor.subscribe('deleteItem',listId,item);
        });




        //static
        this._COMPLETE_POPUP_TEXT = 'List Completed!!!';

        //create unique id list
        if(listId === undefined) {
            listId = ('_' + Math.random().toString(36).substr(2, 9)).toString();
        }

        this._id = listId;
        this._nameList = listName;

        //create and set the tittle of the list
        this._textNameList = new Monolith.widgets.TextWidget;
        this._textNameList.setText(listName);
        this._textNameList.setFormatText(true);
        this._textNameList.setTextSize(20);
        super.addComponent(this._textNameList);

        //set a array for contains the list of the itemWidget
        this._checklist = [];
        this._completionMessage = 'Checklist Completed!';

        //if the user have permission create button for add item

        if(this._permission) {
            //create a button for add the show a inputItem
            this._addItemButton = new Monolith.widgets.ButtonWidget;
            this._textAddItemButton = 'Add Item';
            const btn = this._addItemButton.renderView();
            btn.style.borderRadius = '5px';
            btn.style.marginBottom = '.5em';
            this._addItemButton.setText(this._textAddItemButton);

            this._addItemButton.setOnClickAction(() => {
                this.showInputAddItem();
            });
            super.addComponent(this._addItemButton);
        }

        this._saveItemEvent.on('saveEventItem',(item,listId) => {
            if(this._id === listId){
                this.addNewBringitItem(item);
            }

        });

    }


    /**
     * @method
     * It shows the popUp for adding a new item, it contains all the html forms needed to add all the
     * necessary information
     */
    showInputAddItem(){
        this._shoPopupUseCase.showpopupitemad(this._id);

    }

    /**
     * @method
     * It adds a new item in the database
     * @param item {ListItem} : it represents the item which will be added in the database
     */

    addNewBringitItem(item) {
        Meteor.subscribe('addItemInList',this._id,item);

    }

    /**
     * @method
     * It updates an item in the database
     * @param listItem {ListItem} : the item which will be updated
     */
    updateItem(listItem){
        //console.log(this.isComplete());
        Meteor.subscribe('updateItem',this._id,listItem);
    }

    /**
     *@method
     * It deletes all lists that have the id equal to this instance of Bringit
     * from the all available chats and also in the database
     */

    deleteList(){
        //call a publish in server
        Meteor.subscribe('deleteList',this._id);
    }

    /**@method
     * It deletes all item that have the id equal to @param itemId from the all chat and database
     * @param itemId {string} Id of the Item I want delete from the all list
     */

    deleteItem(itemId){
        Meteor.subscribe('deleteItem',this._id,itemId);
    }



    /**@method
     * It creates and adds in Bringit a new Item with the same details of listItem
     * @param listItem {ListItem} : the item you want to clonate
     */

    addItemFromDb(listItem){

        //create check
        let itemCheck = new Monolith.widgets.checklist.ChecklistWidgetItem(listItem.getName(),listItem.getStatus(),listItem.getId());
        //create and set image
        let itemImage = new Monolith.widgets.ImageWidget;
        if(listItem.getImagePath() != '') {
            itemImage.setImage(listItem.getImagePath());
        }
        itemImage.setVisibility(false);
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


        widgetDescription.setVisibility(false);



        let layoutContainer = new Monolith.layout.HorizontalLayoutView;

        //add all items

        layoutContainer.addItem(itemCheck);
        layoutContainer.addItem(itemImage);
        layoutContainer.addItem(widgetQuantity);
        layoutContainer.addItem(widgetUnity);
        layoutContainer.addItem(widgetDescription);
        this._checklist.push(layoutContainer);

        //setting an action for the clicking of the button

        itemCheck.setOnClick(() => {
            listItem.setStatus(itemCheck.isChecked());

            if(this.isComplete()){
                this._completeEvent.emitCompleteEvent(this._id,this._nameList)
            }

            this.updateItem(listItem);


        });


       // set action fot long click
        itemCheck.setOnLongClick(() => {
            let popup_info_item = container.resolve(Showinfoitem);
            popup_info_item.showlayoutadd(this._id,listItem,this._permission);
        });

        super.addComponent(layoutContainer);

    }

    /**
     * @method
     * It returns true if list is Completed, false if is not completed
     * @returns {boolean} : it represents the returned value
     */
    isComplete(){

        const FIRST_LAYOUT_ITEM = 2;
        let isPossibleComplete = true;

        for(let i= FIRST_LAYOUT_ITEM; i < super.getLayout().getItems().length && isPossibleComplete; i++){
            if(!super.getLayout().getItems()[i].getItems()[0].isChecked()){
                isPossibleComplete = false;
            }

        }

        return isPossibleComplete;
    }



}
