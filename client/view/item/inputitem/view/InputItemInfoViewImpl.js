/**
 * Created by nicolo on 22/04/17.
 *  * Description: Class which allows to create a new  item of the list.
 * This class implement the interface of InputItemInfoView
 * version 3.0.0 - Completed
 */



import {InputItemInfoView} from '../InputItemInfoView';
import {InputItemInfoViewPresenter} from '../presenter/InputItemInfoViewPresenter';
import {container,inject} from 'dependency-injection-es6';
import {SaveItemEvent} from '../../../../event/SaveItemEventEmitter';
import {ShowPopupUseCase} from "../../../../usecase/ShowPopupUseCase";

export class InputItemInfoViewImpl extends InputItemInfoView {


    /**
     * public constructor
     */
    constructor(listId) {
        super();
        /**
         *
         * @type {InputItemInfoViewPresenter}: the reference to the Presenter
         */
        this._presenter = new InputItemInfoViewPresenter(this,listId);
        /**
         * @type {SaveItemEvent} resolve the singleton for the EventItemEmitter
         */
        this._saveEvent = container.resolve(SaveItemEvent);
    }

    showErrorPopup(){
        const pop = container.resolve(ShowPopupUseCase);
        pop.showPopup("Error","Insert the name of the element!");
    }

    /**
     *This method create a function for create the item wih the right param
     * @param name: of item {string}
     * @param quantity: the quantity of item {string}
     * @param description: the description of the item {string}
     * @param measurement: the measurement of the item {string}
     * @param image: the image that rappresent the item {Blob}
     */
    onSaveClicked(name,quantity,description,measurement,image){

        if(name === undefined || name === null || name.length === 0){
            this.showErrorPopup();
        }
        else {

            /*if image is not null covert in blob and encrypt in base64*/
            if (image) {
                const fileReader = new FileReader();
                fileReader.onloadend = (e) => {

                    const arrayBuffer = e.target.result;
                    const fileType = 'image/*';
                    blobUtil.arrayBufferToBlob(arrayBuffer, fileType).then((blob) => {
                        const reader = new FileReader();
                        reader.addEventListener("load", () => {
                            //create item with base64image
                            const item = this._presenter.createListItem(name, reader.result, quantity, description, measurement);
                            this._saveEvent.emitSaveEventItem(item, this._presenter.getListId());
                        }, false);

                        if (blob) {
                            reader.readAsDataURL(blob);
                        }

                    });
                };
                fileReader.readAsArrayBuffer(image);
            }

            else {
                //create item without image
                const item = this._presenter.createListItem(name, '', quantity, description, measurement);
                this._saveEvent.emitSaveEventItem(item, this._presenter.getListId());
            }
        }

    }

}

