/**
 * Created by Luca Dario on 27/03/17
 * Version 1.0.2 - Completed
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
    //const popup = container.resolve(ShowPopupUseCase);
    Template.input.events({
        'click .btn'(event){
            let value = $("#nameList").val();
            let img = $("#imageList").val();
            //if(value !== '') {
            if(value === '' || !(/\S/.test(value))){
                value = 'List';
            }
            if(img === ''){
                img = null;
            }
            inputListInfoView.onSaveClicked(value, img);
            //}
            //else{
             //   popup.showPopupWithFunction('You must add a name and an image to the list to create it!',()=>{},4);
            //}
        }
    });
});
