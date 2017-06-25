/**
 * Created by Luca Dario on 27/03/17
 * Version 1.0.2 - Completed
 */

import {InputListInfoViewImpl} from './InputListInfoViewImpl'
import {container, inject} from 'dependency-injection-es6';

/**
 * This script set event when the button with  class '.btn' clicked, and the event
 *  call InputListInfoViewImpl.onSaveClicked
 */
Meteor.startup(function(){
    const inputListInfoView = container.resolve(InputListInfoViewImpl);

    Template.input.events({
        'click .btn'(){
            let value = $("#nameList").val();
            // if the name is made up by whitespaces or it's empty it will be set the default value
            if(value === '' || !(/\S/.test(value))){
                value = 'List';
            }

            //call the 'save' event
            inputListInfoView.onSaveClicked(value, null);

        }
    });
});
