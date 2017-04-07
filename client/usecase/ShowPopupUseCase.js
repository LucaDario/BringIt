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
    showPopup(html){
        var $ = require('jquery');
        global.jQuery = require("bootstrap-jquery");
        window.$ = $;
        //global.bootbox = require('bootbox');
        //var Modal = require('peppelg:bootstrap-3-modal');
        //Modal.show('exampleModal')



       /* var bootbox = require('bootbox');
        var box = bootbox.dialog({
            message: 'CIAO',
            title: 'CIAO',
            buttons: {},
            show: false
        });

        box.modal('show');
*/
        var selected = new Array();

        global.bootbox = require('bootbox');
        bootbox.alert({
            size: "small",
            message: html,
            backdrop: true,
            closeButton: true,
            onEscape: false,
            callback: function(){
                var brands = $('#sites option:selected');
                $(brands).each(function(index, brand){
                    selected.push([$(this).val()]);
                });
            }
        });
       /*
        bootbox.alert(html, function() {
            var brands = $('#sites option:selected');
            $(brands).each(function(index, brand){
                selected.push([$(this).val()]);
            });
            // any code you want to happen after the alert is dismissed
            console.log("Alert dismissed");
            return selected;
        });*/
        document.getElementsByClassName('modal-dialog')[0].style.zIndex = "1500";
        console.log("FINE");
        return selected;

        /*
        let content = '<div id="myModal" class="modal fade" role="dialog">'+
            '<div class="modal-dialog">'+
            '<!-- Modal content-->'+
            '<div class="modal-content">'+
            '<div class="modal-header">'+
            '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
            '<h4 class="modal-title">Modal Header</h4>'+
            '</div>'+
            '<div class="modal-body">'+
            html+
            '</div>'+
            '<div class="modal-footer">'+
            '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>';
        //this._chatSource.showPopup(content);
        content = $(content);
        console.log("Mandiamo sto popup");
        this._chatSource.sendPopup("ciao",content);
        //return content;*/
    }
}

// Be sure that each instance of this class that will be injected is always the same
container.registerAsSingleton(ShowPopupUseCase);