/**
 * Created by nicolo on 22/04/17.
 */



import {InputItemInfoView} from '../InputItemInfoView';
import {InputItemInfoViewPresenter} from '../presenter/InputItemInfoViewPresenter';
import {container,inject} from 'dependency-injection-es6';
import {SaveItemEvent} from '../../../../event/SaveItemEvent';

export class InputItemInfoViewImpl extends InputItemInfoView {


    /**
     * public constructor
     */
    constructor(listId) {
        super();
        this._presenter = new InputItemInfoViewPresenter(this,listId);
        this._saveEvent = container.resolve(SaveItemEvent);
    }

    /**
     *This Create a listData and call a emitSaveEvent on SalveEventClass whit ListData created
     * @param name of list {string}
     * @param photoList path {string}
     */
    onSaveClicked(name,quantity,description,mesaurement,image){

        /*if image is not null covert in blob and encrypt in base64*/
        if(image) {
            let fileReader = new FileReader();
            fileReader.onloadend = (e) => {

                let arrayBuffer = e.target.result;
                let fileType = 'image/*';
                blobUtil.arrayBufferToBlob(arrayBuffer, fileType).then((blob) => {
                    let reader = new FileReader();
                    reader.addEventListener("load", () => {
                        //create item with base64image
                        let item = this._presenter.createListItem(name, reader.result, quantity, description, mesaurement);
                        this._saveEvent.emitSaveEventItem(item, this._presenter.getListId());
                    }, false);

                    if (blob) {
                        reader.readAsDataURL(blob);
                    }

                });
            };
            fileReader.readAsArrayBuffer(image);
        }

        else{
            //create item without image
            let item = this._presenter.createListItem(name, '', quantity, description, mesaurement);
            this._saveEvent.emitSaveEventItem(item, this._presenter.getListId());
        }




    }


}

