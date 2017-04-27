/**
 * Created by nicolo on 22/04/17.
 */

import {container, singleton, inject} from 'dependency-injection-es6';

import {InputItemInfoViewImpl} from './InputItemInfoViewImpl'
import {ShowPopupUseCase} from '../../../../../client/usecase/ShowPopupUseCase';


/**
 * This script set event when the button with  class '.btn' clicked, and the event
 *  call InputListInfoViewImpl.onSaveClicked
 *
 */
function showpopupitemad(listId)
{
    let showPop = container.resolve(ShowPopupUseCase);

    let inputItemInfoView = new InputItemInfoViewImpl(listId);

    let f = function () {
        inputItemInfoView.onSaveClicked($("#itemList").val(), $("#itemQuantity").val(),
            $("#itemdescription").val(),'imageitem',$("#itemMesaurement").val() );
    };


    showPop.showPopupWithFunction(
        '<div class="content">' +
        '<h2>AGGIUNTA DI UNA ITEM</h2>' +
        '<div id="input_item_img">' +
        'Inserisci limmagine che vuoi rappresenti il tuo item <br>' +
        '<input  id="imageITem" type="file" name="item_image" accept="image/*">' +
        '</div>' +
        '<div id="input_name_item">' +
        'Inserisci il nome del item che vuoi creare:<br>' +
        '<input id="itemList" type="text" name="item_name"><br>' +
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
    '</div>', f, 1);
}
export {showpopupitemad};
