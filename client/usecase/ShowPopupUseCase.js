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
 * Version 1.0.0 - Initial version
 * Version 1.0.1 - added three methods: showPopupAndSend, showPopupWithFunction and showPopup - Stefano Lia
 */

import {container} from 'dependency-injection-es6';
import {ChatSource} from "../chat/ChatSource";
import "./popup.html";
import {ShareEventEmitter} from '../event/ShareEventEmitter';

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
     */
    showPopupAndSend(content,json){

        //necessary to use jQuery and Bootstrap
        var $ = require('jquery');
        global.jQuery = require("bootstrap-jquery");
        window.$ = $;

        //calling the library bootbox to make popups
        global.bootbox = require('bootbox');
        bootbox.alert({
            size: "small",
            message: content,
            backdrop: true,
            closeButton: true,
            onEscape: false,
            callback: function(){ // it will be executed after popup's closing
                let emitter = container.resolve(ShareEventEmitter);
                let selected = $('#sites').val(); //get user's choice
                console.log(emitter);
                emitter.emitShareEvent(selected,json); // launch event
            }
        });
        let elem = document.getElementsByClassName('modal-dialog');
        let last = document.getElementsByClassName('modal-dialog')[elem.length-1];
        last.style.zIndex = "1500";
    }

    /**
     * @method
     * Show a popup with a message inside and after its closing a function will be executed in an asynchronous way.
     * @param content {string} : the html that will be shown inside the popup.
     * @param fun {function} : this function will be executed after popup's closing.
     * @param indice  : this indice set the type of modal .

     */
    showPopupWithFunction(content, fun, indice=0){
        var $ = require('jquery');
        global.jQuery = require("bootstrap-jquery");
        window.$ = $;
        global.bootbox = require('bootbox');


        if (indice==0) {
            bootbox.alert({
                size: "small",
                message: content,
                backdrop: true,
                closeButton: true,
                onEscape: false,
                callback: fun
            });
        }
        if (indice==1) {
            bootbox.confirm({

                size: "small",
                message: content,
                buttons: {
                    confirm: {
                        label: 'Vuoi confermare questo item',
                        className: 'btn-success'
                    }},
                closeButton: false,
                onEscape: false,
                callback: function(result) {
                    console.log(result + "DIOCANE");
                    if (result==true)
                    {
                        fun();
                    }

                }
            });
        }
        let elem = document.getElementsByClassName('modal-dialog');
        let last = document.getElementsByClassName('modal-dialog')[elem.length-1];
        last.style.zIndex = "1500";
    }

    /**
     * @method
     * Show a popup with a message inside.
     * @param content {string} : the html that will be shown inside the popup.
     */
    showPopup(content){
        bootbox.alert({
            size: "small",
            message: content,
            backdrop: true,
            closeButton: true,
            onEscape: false
        });
        let elem = document.getElementsByClassName('modal-dialog');
        let last = document.getElementsByClassName('modal-dialog')[elem.length-1];
        last.style.zIndex = "1500";
    }
}



// Be sure that each instance of this class that will be injected is always the same
container.registerAsSingleton(ShowPopupUseCase);