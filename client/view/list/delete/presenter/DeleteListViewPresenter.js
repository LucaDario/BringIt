/**
 * The presenter of DeleteListViewImpl.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.0 -
 */

import {ShowPopupUseCase} from '../../../../usecase/ShowPopupUseCase';
import {DeleteListEventEmitter} from '../../../../event/DeleteListEventEmitter';
import {DeleteListViewImpl} from '../view/DeleteListViewImpl';
import {container, singleton, inject, dependencies} from 'dependency-injection-es6';

export class DeleteListViewPresenter{
    /**
     * @type {Object}: DeleteListViewImpl element for the presenter
     */
    _view;

    /**
     * @type {Object}: A ShowPopupUseCase object used to create a new modal
     */
    _popup;

    /**
     * @constructor
     * Constructor of DeleteListViewPresenter
     * @param view {Object}
     */
    constructor(view){
        this._view = view;
        this._popup = container.resolve(ShowPopupUseCase)
    }

    openDeleteListView(listId,nameList){

    }
}
