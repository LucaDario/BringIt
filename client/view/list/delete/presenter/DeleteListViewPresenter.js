/**
 * The presenter of DeleteListViewImpl.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.0 -
 */

import {DeleteListEventEmitter} from '../../../../event/DeleteListEventEmitter';
import {DeleteListViewImpl} from '../view/DeleteListViewImpl';
import {container, singleton, inject, dependencies} from 'dependency-injection-es6';
import {ManageListsUseCase} from '../../../../../server/usecase/ManageListsUseCase';

export class DeleteListViewPresenter{
    /**
     * @type {Object}: DeleteListViewImpl element for the presenter
     */
    _view;

    /**
     * @type {Object}: Component required for communication between presenter and databases.
     */
    _manageList;

    /**
     * @constructor
     * Constructor of DeleteListViewPresenter
     * @param view {Object}
     */
    constructor(view){
        this._view = view;
        this._manageList = container.resolve(ManageListsUseCase);
    }

    openDeleteListView(listId){
        this._manageList.deleteList(listId);
    }
}
