/**
 * Created by lucadario on 21/04/17.
 */

import {container, singleton, inject} from 'dependency-injection-es6';

export class Bringit extends Monolith.bubble.BaseBubble {

    constructor(listName){
        super();
        //create unique id list
        this._id = ('_' + Math.random().toString(36).substr(2, 9)).toString();
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
        this.addItem('martei');
        console.log('addItem');
        //per nico qui chiamerai il tuo popup per l'addItem

    }

    addItem(item,check = false) {
        let opt = new Monolith.widgets.checklist.ChecklistWidgetItem(item,check);
        this._checklist.push(opt);
        let index = this._checklist.indexOf(opt);
        this._checklist[index].setOnClick(() => {

        });
        super.addComponent(this._checklist[index]);
    }

}