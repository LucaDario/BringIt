/**
 * Created by lucadario on 27/03/17.
 */

import {InputListInfoViewImpl} from './InputListInfoViewImpl'
import {container, inject} from 'dependency-injection-es6';
import {ShowPopupUseCase} from '../../../../usecase/ShowPopupUseCase';

/**
 * This script set event when the button with  class '.btn' clicked, and the event
 *  call InputListInfoViewImpl.onSaveClicked
 *
 */
Meteor.startup(function(){
    const inputListInfoView = container.resolve(InputListInfoViewImpl);
    const popup = container.resolve(ShowPopupUseCase);
    Template.input.events({
        'click .btn'(event){
            const value = $("#nameList").val();
            const img = $("#imageList").val();
            if(value !== '' && img !== '' ) {
                inputListInfoView.onSaveClicked(value, 'image');
            }
            else{
                popup.showPopupWithFunction('You must add a name and an image to the list to create it!',()=>{},4);
            }
        }
    });
});
