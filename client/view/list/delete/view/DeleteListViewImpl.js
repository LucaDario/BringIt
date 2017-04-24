/**
 * The concrete class od DeleteListViewImpl.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.0 -
 */

import {container,inject} from 'dependency-injection-es6';
import {DeleteListEventEmitter} from '../../../../event/DeleteListEventEmitter';
import {DeleteListView} from '../DeleteListView';
import {DeleteListViewPresenter} from '../presenter/DeleteListViewPresenter';

export class DeleteListViewImpl extends DeleteListView{
    /**
     * @type {Object}: Presenter of DeleteListViewImpl
     */
    _presenter;

    /**
     * Public constructor
     */
    constructor(){
        super();
        //TODO inject
        this._presenter = new DeleteListViewPresenter(this);
    }

    openDeleteListView(listId,nameList){
        this._presenter.openDeleteListView(listId,nameList);
    }
}
