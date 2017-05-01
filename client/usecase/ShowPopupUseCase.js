/**
 * Description: Class which represents the use case that helps showing a new popup to the user.
 * To obtain an instance of this class be sure to include the following code inside the class that uses it:
 * <code>
 *  // Needed import
 *  import {container} from 'dependency-injection-es6';
 *
 *  // This will get your instance
 *  var showPopupUseCase = container.resolve(ShowPopupUseCase);
 * <code/>
 *
 * Created by Riccardo Montagnin on 29/03/2017.
 *
 * Version 7.4.0 - add index for a popup for the share with contact. Miss popup for modify item
 */

import {container} from 'dependency-injection-es6';
import {ChatSource} from "../chat/ChatSource";
import "./popup.html";
import {DeleteListEventEmitter} from '../event/DeleteListEventEmitter';
import {ShareEventEmitter} from '../event/ShareEventEmitter';
import "../modal.css";
import {ModifyListEvent} from '../event/ModifyListEvent';
import {DeleteItem} from '../event/DeleteItem';
import {InputItemInfoViewImpl} from '../view/item/inputitem/view/InputItemInfoViewImpl'


//const ReactiveModal = require('');

export class ShowPopupUseCase{

    /**
     * Public constructor.
     */
    constructor(){
        this._chatSource = container.resolve(ChatSource);
        this._boot = require('bootbox');
    }

    /**
     * @method
     * Shows a popup with a message inside and sends a message.
     * @param content {string}: Content which needs to be shown inside the popup.
     * @param json {JSON}: what will be shared in other channels.
     * @param title {string}: the title of the modal
     */
    showPopupAndSend(title,content,json){
        const $ = require('jquery');
        global.jQuery = require("bootstrap-jquery");
        window.$ = $;
        //necessary to use jQuery and Bootstrap
        //calling the library bootbox to make popups
        global.bootbox = require('bootbox');
        bootbox.confirm({
            size: "small",
            title: title,
            message: content,
            buttons: {
                confirm: {
                    label: 'Share',
                }
            },
            closeButton: false,
            onEscape: false,
            callback: function (result) { // it will be executed after popup's closing
                if (result === true) {
                    let emitter = container.resolve(ShareEventEmitter);
                    let selected = $('#sites').val(); //get user's choice
                    emitter.emitShareEvent(selected, json, title); // launch event
                }
            }
        });
    }

    /**
     * @method
     * Show a popup with a message inside and after its closing a function will be executed in an asynchronous way.
     * @param content {string} : the html that will be shown inside the popup.
     * @param fun {function} : this function will be executed after popup's closing.
     * @param index  : this indice set the type of modal .

     */
    showPopupWithFunction(content, fun, index = 0){
        //necessary to use jQuery and Bootstrap
        const $ = require('jquery');
        global.jQuery = require("bootstrap-jquery");
        window.$ = $;

        //calling the library bootbox to make popups
        global.bootbox = require('bootbox');
        if (index === 0) {
            bootbox.alert({
                size: "small",
                message: content,
                backdrop: true,
                closeButton: true,
                onEscape: false,
                callback: fun
            });
        }
        if (index === 1) {
            bootbox.confirm({

                size: "small",
                message: content,
                buttons: {
                    confirm: {
                        label: 'Confirm',
                        className: 'btn-primary'
                    }},
                closeButton: false,
                onEscape: false,
                callback: function(result) {
                    if (result === true)
                    {
                        fun();
                    }

                }
            });
        }
        //List Deleted
        if (index === 2) {
            global.jQuery = require('bootstrap-jquery');
            window.$ = $;
            let title = 'List ' + content;
            let message = 'Successfully deleted!';
            global.bootbox = require('bootbox');
            bootbox.alert({
                size: "small",
                title: title,
                message: message,
                backdrop: true,
                closeButton: true,
                onEscape: false
            });
        }
        if (index === 3) {
            global.jQuery = require('bootstrap-jquery');
            window.$ = $;
            global.bootbox = require('bootbox');
            bootbox.confirm({
                size: "small",
                title: 'List ' + content,
                message: 'Are you sure you want to delete this list?',
                buttons: {
                    confirm: {
                        label: 'Yes',
                    }
                },
                closeButton: false,
                onEscape: false,
                callback: function(result) {
                    if (result === true){
                        fun();
                    }
                }
            });
        }
    }

    /**
     * @method
     * Show a popup with a message inside.
     * @param content {string} : the html that will be shown inside the popup.
     * @param title {string}: the title of the modal
     */
    showPopup(title,content, listId, item,index=0,){


        //necessary to use jQuery and Bootstrap
        const $ = require('jquery');
        global.jQuery = require("bootstrap-jquery");
        window.$ = $;

        //calling the library bootbox to make popups
        global.bootbox = require('bootbox');

        if (index == 0) {

            bootbox.alert({
                size: "small",
                title: title,
                message: content,
                backdrop: true,
                closeButton: true,
                onEscape: false
            });
        }
        if ( index == 1) {
            bootbox.dialog({
                message: content,
                title: title,
                buttons: [
                    {
                        label: "Vuoi modificare la lista",
                        className: "btn btn-primary pull-left",
                        callback: function() {
                            let emitter = container.resolve(ModifyListEvent);
                            emitter.emitModifyitem(listid,itemid);
                        }
                    },
                    {
                        label: "Vuoi elimare la lista",
                        className: "btn btn-primary pull-left",
                        callback: function() {
                            let emitter = container.resolve(DeleteItem);
                            emitter.emitDeleteItem(listId,item);
                        }
                    }
                ],
                onEscape: "null",
            });

        }
    }

    /**
     * @method
     * Show a popup with a message inside and after its closing a function will be executed in
     * an asynchronous way. This popup is used to share permission with a contact, used by ShareWithContact
     * @param content {string} : the html that will be shown inside the popup.
     * @param person {string}: the person whom you want to give permissions to
     * @param json {JSON}: the message you've already sent
     */

    showPopupContactPermission(content,person,json){
        const $ = require('jquery');
        global.jQuery = require("bootstrap-jquery");
        window.$ = $;
        //necessary to use jQuery and Bootstrap
        //calling the library bootbox to make popups
        global.bootbox = require('bootbox');
        bootbox.confirm({
            size: "small",
            message: content,
            buttons: {
                confirm: {
                    label: 'Confirm',
                    className: 'btn-primary'
                }
            },
            closeButton: false,
            onEscape: false,
            callback: function (result) { // it will be executed after popup's closing
                if (result === true) {
                    Meteor.call('getIdUser', person, true, function (error, result) {
                        if(result) {
                            Meteor.subscribe('sendPermissionsContact', json.listData._id, result);
                        }
                        else {
                            console.log(error);
                        }
                    });
                }
            }
        });
    }

    /**
     * @method
     * Show a popup with a message inside.
     * @param content {string} : the html that will be shown inside the popup.
     * @param title {string}: the title of the modal
     */

    showpopupitemad(listId) {

    let inputItemInfoView = new InputItemInfoViewImpl(listId);

    let f = function () {
        inputItemInfoView.onSaveClicked($("#itemList").val(), $("#itemQuantity").val(),
            $("#itemdescription").val(),$("#itemMesaurement").val(),document.getElementById('imageItem').files[0]);

    };


    this.showPopupWithFunction(
        '<div class="subject">' +
        '<h2>AGGIUNTA DI UNA ITEM</h2>' +
        '<form>'+
        '<div id="input_item_img">' +
        'Inserisci limmagine che vuoi rappresenti il tuo item <br>' +
        '<input  id="imageItem" type="file" name="item_image" accept="image/*">' +
        '</div>' +
        '<div id="input_name_item">' +
        'Inserisci il nome del item che vuoi creare:<br>' +
        '<input id="itemList" type="text" name="item_name" required><br>' +
        '</div>' +
        '<div id="input_quantity_item">' +
        'Inserisci la quantità del item che vuoi creare:<br>' +
        '<input id="itemQuantity" type="number" name="item_quantity"><br>' +
        '</div>' +
        '<div id="input_description_item">' +
        'Inserisci la descrizione del item che vuoi creare:<br>' +
        '<input id="itemdescription" type="text" name="item_description"><br>' +
        '</div>' +
        '<div id="input_mesaurement_unit">' +
        ' Inserisci l unita di misura del item che vuoi creare:<br>' +
        '<input id="itemMesaurement" type="text" name="item_mesaurement"><br>'+
        '</div>'+
        '</form>'
        , f, 1);
    }
}



// Be sure that each instance of this class that will be injected is always the same
container.registerAsSingleton(ShowPopupUseCase);
