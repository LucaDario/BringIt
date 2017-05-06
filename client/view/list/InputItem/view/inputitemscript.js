/**
 * Created by nicolo on 22/04/17.
 */


import {InputListItemViewImpl} from './InputItemInfoViewImpl'


/**
 * This script set event when the button with  class '.btn' clicked, and the event
 *  call InputListInfoViewImpl.onSaveClicked
 *
 */
let inputItemInfoView = new InputItemInfoViewImpl();

Template.inputItem.events({
    'click .btn'(event){
        inputItemInfoView.onSaveClicked($("#itemList").val(),$("#itemQuantity").val(),
            $("#itemdescription").val(), $("#itemMesaurement").val(),'imageitem',);
    }
});