/**
 * The presenter of DeleteListViewImpl.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 2.0.0 - completed
 */

import {ShowPopupUseCase} from '../../../../usecase/ShowPopupUseCase';
import {container,inject} from 'dependency-injection-es6';

export class DeleteListViewPresenter{

    /**
     * @type {Object}: A ShowPopupUseCase object used to create a new modal
     */
    _popup;

    /**
     * @constructor
     * Constructor of DeleteListViewPresenter
     */
    constructor(){
        this._popup = container.resolve(ShowPopupUseCase);
    }

    openDeleteListView(listId,nameList){
        const popup = container.resolve(ShowPopupUseCase);
        const fun = (viewDel = this._view)=>{
            viewDel.getDeleteEvent().emitDeleteEvent(listId,nameList)
        };
        popup.showPopupWithFunction(nameList,fun,3);
    }
}
