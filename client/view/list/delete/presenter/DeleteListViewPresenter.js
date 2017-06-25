/**
 * The presenter of DeleteListViewImpl.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 2.0.0 - completed
 */

import {ShowPopupUseCase} from '../../../../usecase/ShowPopupUseCase';
import {container,inject} from 'dependency-injection-es6';
import {DeleteListViewImpl} from '../view/DeleteListViewImpl';

export class DeleteListViewPresenter{

    /**
     * @type {Object}: A ShowPopupUseCase object used to create a new modal
     */
    _popup;

    /**
     * @type {Object}: the view associated to the presenter
     */
    _view;

    /**
     * Public constructor
     */
    constructor(view){
        this._popup = container.resolve(ShowPopupUseCase);
        this._view = view;
    }

    /**
     * @method
     * Allows you to show the popup for deletion of the list
     * @param listId {Object}: the id of the list
     * @param nameList {string}: the name of the list
     */
    openDeleteListView(listId,nameList){
        const fun = (viewDel = this._view)=>{
            viewDel.getDeleteEvent().emitDeleteEvent(listId,nameList)
        };
        this._popup.showPopupWithFunction(nameList,fun,3);
    }
}
