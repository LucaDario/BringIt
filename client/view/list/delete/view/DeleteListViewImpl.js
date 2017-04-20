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
     * @type {Object}: The DeleteEvent instance
     */
    _deleteEvent;

    /**
     * Public constructor
     */
    constructor(){
        super();
        //TODO inject
        this._presenter = new DeleteListViewPresenter(this);
        this._deleteEvent = container.resolve(DeleteListEventEmitter);
        this._deleteEvent.on('deleteEvent', (listId) => {
            this._presenter.openDeleteListView(listId);
        });
    }

    /**
     * @method onDeleteListClicked
     *It represents the view that allows you to delete a bringit list.
     * @param listId {Object}: The id of the list that will be send with the emitter
     */
    onDeleteListClicked(listId){
        this._deleteEvent.emitDeleteEvent(listId);
    }
}
