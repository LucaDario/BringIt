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
    constructor() {
        super();
        this._presenter = new InputItemInfoViewPresenter(this);
        this._saveEvent = container.resolve(SaveItemEvent);
    }

    /**
     *This Create a listData and call a emitSaveEvent on SalveEventClass whit ListData created
     * @param name of list {string}
     * @param photoList path {string}
     */
    onSaveClicked(name,quantity,description,mesaurement,image){
        let item = this._presenter.createListItem(name,quantity,description,mesaurement,image);
        this._saveEvent.emitSaveEventItem(item);
    }
}
