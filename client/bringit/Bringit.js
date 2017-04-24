/**
 * Created by lucadario on 21/04/17.
 */

import {container, singleton, inject} from 'dependency-injection-es6';
import {ListData} from '../../data/ListData'


export class Bringit extends Monolith.bubble.BaseBubble {

    constructor(listName, listId = undefined){
        super();


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

        this._addItemButton.setOnLongClickAction(() => {
            this.showInputAddItem();
        });

        super.addComponent(this._addItemButton);





    }


    showInputAddItem(){
        this.addNewBringitItem('martei');
        console.log('addNewBringitItem');
        //per nico qui chiamerai il tuo popup per l'addNewBringitItem

    }

    addNewBringitItem() {
        let itemCheck = new Monolith.widgets.checklist.ChecklistWidgetItem('');
        let itemImage = new Monolith.widgets.ImageWidget;
        let itemText = new Monolith.widgets.TextWidget;

        let layoutContainer = new Monolith.layout.HorizontalLayoutView;
        layoutContainer.addItem(itemCheck);
        layoutContainer.addItem(itemImage);
        layoutContainer.addItem(itemText);


        this._checklist.push(layoutContainer);


        itemCheck.setOnClick(() => {
            this.setStatusItemInDb(this._id, itemCheck.getId());

        });

        itemCheck.setOnLongClick(() => {

        });

        super.addComponent(layoutContainer);
    }

    addImage(itemContainer,path){
        let listItem = itemContainer.getItems();
        for(let obj in listItem){
            if(obj instanceof Monolith.widgets.ImageWidget){
                obj.setImage(path);
            }
        }

    }

    addText(itemContainer,text){
        let listItem = itemContainer.getItems();
        for(let obj in listItem){
            if(obj instanceof Monolith.widgets.TextWidget){
                obj.setText(text);
            }
        }

    }

    addCheckDetails(itemContainer,check, name = ''){
        let listItem = itemContainer.getItems();
        for(let obj in listItem){
            if(obj instanceof Monolith.widgets.TextWidget){
                obj.setText(text);
                obj.setChecked(check);

            }
        }
    }

    setStatusItemInDb(itemId, status){
        Meteor.subscribe('setStatusItemInDb',this._id,itemId,status);

    }


    cloneListItem(listItemJson){

    }

    deleteList(){
        Meteor.subscribe('deleteList',this._id);
    }

    deleteItem(itemId){
        Meteor.subscribe('deleteItem',this._id,itemId);
    }



}