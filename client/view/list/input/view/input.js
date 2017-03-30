/**
 * Created by lucadario on 27/03/17.
 */

import {InputListInfoViewImpl} from './InputListInfoViewImpl'


/**
 * This script set event when the button with  class '.btn' clicked, and the event
 *  call InputListInfoViewImpl.onSaveClicked
 *
 */
let inputListInfoView = new InputListInfoViewImpl();

Template.input.events({
    'click .btn'(event){
        inputListInfoView.onSaveClicked($("#nameList").val(),'image');
    }


});