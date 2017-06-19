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
import {ModifyListEvent} from '../event/ModifyListEventEmitter';
import {modifyitem} from '../view/item/modifyitem/modifyitem';


import {InputItemInfoViewImpl} from '../view/item/inputitem/view/InputItemInfoViewImpl';


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
        this._modifyItemEvent= container.resolve(ModifyListEvent);

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

        this._modifyItemEvent.on('ModifyItem',(listId,item) => {
            if(this._id == listId) {
                const description = item.getDescription();
                const quantity = item.getQuantity();
                parseInt(quantity);
                const name = item.getName();
                const unity = item.getMeasurementUnit();
                const image = item.getImagePath();
                const a = parseInt(quantity);


                const f = function () {
                    this._modifyitem = container.resolve(modifyitem);

                    if (document.getElementById('imageItem').files[0] != undefined) {
                        this._modifyitem.modifyitemclicked($("#itemList").val(), $("#itemQuantity").val(),
                            $("#itemdescription").val(), $("#itemMesaurement").val(), document.getElementById('imageItem').files[0],
                            item, listId,true);
                    }
                    else {
                        this._modifyitem.modifyitemclicked($("#itemList").val(), $("#itemQuantity").val(),
                            $("#itemdescription").val(), $("#itemMesaurement").val(), image,
                            item, listId,false);

                    }


                };

                this._shoPopupUseCase.showPopupWithFunction(
                    '<script src="//wzrd.in/standalone/blob-util@latest"></script>' +
                    '<div class="subject">' +
                    '<form>' +
                    '<div id="input_item_img">' +
                    'Modify the image of the item:<br>' +
                    '<input  id="imageItem" type="file" name="item_image" accept="image/*" >' +
                    '</div>' +
                    '<div id="input_name_item">' +
                    'Modify the name of the item:<br>' +
                    '<input id="itemList" type="text" name="item_name"  value="'+name+'"><br>' +
                    '</div>' +
                    '<div id="input_quantity_item">' +
                    'Modify the quantity of the item:<br>' +
                    '<input id="itemQuantity" type="number" name="item_quantity" value="' + a + '" ><br>' +
                    '</div>' +
                    '<div id="input_description_item">' +
                    'Modify the description of the item<br>' +
                    '<input id="itemdescription" type="text" name="item_description" value="'+ description +'"><br>' +
                    '</div>' +
                    '<div id="input_mesaurement_unit">' +
                    'Modify the measure unit of the item:<br>' +
                    '<input id="itemMesaurement" type="text" name="item_mesaurement" value="'+unity+'"><br>' +
                    '</div>' +
                    '</form>' +
                    '</div>'
                    , f, 5);
            }

        });




        //static
        this._COMPLETE_POPUP_TEXT = 'List Completed!!!';

        //create unique id list
        if(listId === undefined) {
            listId = ('_' + Math.random().toString(36).substr(2, 9)).toString();
        }

        this._id = listId;
        this._nameList = listName;

        //create and set the title of the list
        this._textNameList = new Monolith.widgets.TextWidget;
        this._textNameList.setText(listName);
        this._textNameList.setTextColor('#FFFFFF');
        this._textNameList.setFormatText(true);
        this._textNameList.setTextSize(20);
        const titleCentered = this._textNameList.renderView();
        titleCentered.style.textAlign = 'center';
        super.addComponent(this._textNameList);

        //set a array for contains the list of the itemWidget
        this._checklist = [];
        this._completionMessage = 'Checklist Completed!';

        //if the user have permission create button for adding item

        if(this._permission) {
            //create a button for add the show a inputItem
            this._addItemButton = new Monolith.widgets.ButtonWidget;
            this._textAddItemButton = 'Add Item';
            const btn = this._addItemButton.renderView();
            btn.style.borderRadius = '5px';
            btn.style.marginBottom = '.2em';
            this._addItemButton.setText(this._textAddItemButton);

            this._addItemButton.setOnClickAction(() => {
                this.showInputAddItem();
            });
            this._addItemButton.setBackgroundColor('#5AB5E6');
            const buttonCentered = this._addItemButton.renderView();
            buttonCentered.style.width = '100%';
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
        const inputItemInfoView = new InputItemInfoViewImpl(this._id);

        const f = function () {
            inputItemInfoView.onSaveClicked($("#itemList").val(), $("#itemQuantity").val(),
                $("#itemdescription").val(),$("#itemMesaurement").val(),document.getElementById('imageItem').files[0]);

        };

        this._shoPopupUseCase.showPopupWithFunction(
            '<div class="subject">' +
            '<form>'+
            '<div id="input_item_img">' +
            'Add an image for the item:<br>' +
            '<input  id="imageItem" type="file" name="item_image" accept="image/*">' +
            '</div>' +
            '<div id="input_name_item">' +
            'Add the name of the item:<br>' +
            '<input id="itemList" type="text" name="item_name" required><br>' +
            '</div>' +
            '<div id="input_quantity_item">' +
            'Add the quantity of the item:<br>' +
            '<input id="itemQuantity" type="number" name="item_quantity"><br>' +
            '</div>' +
            '<div id="input_description_item">' +
            'Add a description for the item:<br>' +
            '<input id="itemdescription" type="text" name="item_description"><br>' +
            '</div>' +
            '<div id="input_mesaurement_unit">' +
            'Add a measure unit for the item:<br>' +
            '<input id="itemMesaurement" type="text" name="item_mesaurement"><br>'+
            '</div>'+
            '</form>' +
            '</div>'
            , f, 1);

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
        if(!this._permission) {
            //create a button for add the show a inputItem
            this._addItemButton = new Monolith.widgets.ButtonWidget;
            super.addComponent(this._addItemButton);
        }
        super.removeLastComponent();
        //create check
        let itemCheck = new Monolith.widgets.checklist.ChecklistWidgetItem(listItem.getName(),listItem.getStatus(),listItem.getId());
        //create and set image
        itemCheck.setSelectionColor('#2A54A0');
        itemCheck.setNotSelectedColor('#2A54A0');
        itemCheck.setTextColor('#FFFFFF');
        let itemImage = new Monolith.widgets.ImageWidget;
        if(listItem.getImagePath() !== '') {
            itemImage.setImage(listItem.getImagePath());
        }
        itemImage.setVisibility(false);
        //create and set quantity
        let widgetQuantity = new Monolith.widgets.TextWidget;
        widgetQuantity.setTextColor('#FFFFFF');
        if(listItem.getQuantity() !== undefined) {
            widgetQuantity.setText(listItem.getQuantity().toString());
        }


        //create and set unit
        let widgetUnity = new Monolith.widgets.TextWidget;
        widgetUnity.setTextColor('#FFFFFF');
        if(listItem.getMeasurementUnit() !== undefined) {
            widgetUnity.setText(listItem.getMeasurementUnit().toString());
        }

        //create widget description
        let widgetDescription = new Monolith.widgets.TextWidget;
        if(listItem.getDescription() !== undefined) {
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
            popup_info_item.showlayoutadd(this._id,listItem,this._permission,this._checklist);
        });

        super.addComponent(layoutContainer);
        if(this._permission) {
            //create a button for add the show a inputItem
            this._addItemButton = new Monolith.widgets.ButtonWidget;
            this._textAddItemButton = 'Add Item';
            const btn = this._addItemButton.renderView();
            btn.style.borderRadius = '5px';
            btn.style.marginBottom = '.2em';
            this._addItemButton.setText(this._textAddItemButton);

            this._addItemButton.setOnClickAction(() => {
                this.showInputAddItem();
            });
            this._addItemButton.setBackgroundColor('#5AB5E6');
            const buttonCentered = this._addItemButton.renderView();
            buttonCentered.style.width = '100%';
            super.addComponent(this._addItemButton);

        }

    }

    /**
     * @method
     * It returns true if list is Completed, false if is not completed
     * @returns {boolean} : it represents the returned value
     */
    isComplete(){

        const FIRST_LAYOUT_ITEM = 1;
        let isPossibleComplete = true;
        let length = super.getLayout().getItems().length - 1;
        if(!this._permission) {
            length = length+1;
        }
        console.log(super.getLayout());
        for(let i= FIRST_LAYOUT_ITEM; i < length && isPossibleComplete; i++){
            if(!super.getLayout().getItems()[i].getItems()[0].isChecked()){
                isPossibleComplete = false;
            }

        }

        return isPossibleComplete;
    }



}
