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
     */
    showPopup(html,list){
        var $ = require('jquery');
        global.jQuery = require("bootstrap-jquery");
        window.$ = $;
        //global.bootbox = require('bootbox');
        //var Modal = require('peppelg:bootstrap-3-modal');
        //Modal.show('exampleModal')

        var selected = '';

        global.bootbox = require('bootbox');
        bootbox.alert({
            size: "small",
            message: html,
            backdrop: true,
            closeButton: true,
            onEscape: false,
            callback: function(){
                let emitter = container.resolve(ChooseEventEmitter);
                selected = $('#sites').val()
                /*var brands = $('#sites option:selected');
                for(let i=0; i<brands.length; i++){
                    selected[i] = brands[i];
                    console.log(selected[i]);
                }*/
                emitter.emitChooseEvent(selected[0],list);
            }
        });
        document.getElementsByClassName('modal-dialog')[0].style.zIndex = "1500";
        console.log("FINE");
        return "ciao";
        //return selected[0].label;
    }
}

// Be sure that each instance of this class that will be injected is always the same
container.registerAsSingleton(ShowPopupUseCase);