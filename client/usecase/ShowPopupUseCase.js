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
 * Created by Riccardo Montagnin on 29/03/2017.
 * Version 1.0.0 - Initial version
 */

import {container} from 'dependency-injection-es6';
import {ChatSource} from "../chat/ChatSource";
import "./popup.html";
import {ChooseEventEmitter} from '../event/ChooseEventEmitter';

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
     * Shows a popup with the given content inside the chat.
     * @param content {string}: Content which needs to be showed inside the popup.
     * @param json {JSON}: what will be shared in other channels.
     */
    showPopupAndShare(content,json){

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
            callback: function(){ // it will be exectuted after popup's closing
                let emitter = container.resolve(ChooseEventEmitter);
                let selected = $('#sites').val(); //get user's choice
                emitter.emitChooseEvent(selected,json); // launch event
            }
        });
        document.getElementsByClassName('modal-dialog')[0].style.zIndex = "1500";
    }

    showPopup(content){
        bootbox.alert({
            size: "small",
            message: content,
            backdrop: true,
            closeButton: true,
            onEscape: false,
        });
        let elem = document.getElementsByClassName('modal-dialog');
        let last = document.getElementsByClassName('modal-dialog')[elem.length-1];
        last.style.zIndex = "1500";
    }
}

// Be sure that each instance of this class that will be injected is always the same
container.registerAsSingleton(ShowPopupUseCase);