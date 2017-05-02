/**
 * The concrete class od DeleteListViewImpl.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 2.0.0 - completed
 */

import {container,inject} from 'dependency-injection-es6';
import {DeleteListEventEmitter} from '../../../../event/DeleteListEventEmitter';
import {DeleteListView} from '../DeleteListView';
import {DeleteListViewPresenter} from '../presenter/DeleteListViewPresenter';
import {ShowPopupUseCase} from '../../../../usecase/ShowPopupUseCase';

export class DeleteListViewImpl extends DeleteListView{
    /**
     * @type {Object}: Presenter of DeleteListViewImpl
     */
    _presenter;
    /**
     * @type  {DeleteListEventEmitter}: the resolve for the singleton where is emit the event of delet
     */

    _deleteEvent;
    /**
     * @type {ShowPopupUseCase}: this show the popup for the confirm of the delete
     */

    _popup;

    /**
     * Public constructor
     */
    constructor(){
        super();
        //TODO inject
        this._popup = container.resolve(ShowPopupUseCase);
        this._deleteEvent = container.resolve(DeleteListEventEmitter);
        this._deleteEvent.on('deleteEvent', (listId,nameList) => {
            Meteor.subscribe('deleteList',listId,nameList, {
                onReady: (id) => {
                    this._popup.showPopupWithFunction(nameList, () => {
                    }, 2);
                }
            });
        });
        this._deleteEvent.on('deleteThisEvent',(listId,nameList)=>{
            this.openDeleteListView(listId, nameList);
        });
        this._presenter = container.resolve(DeleteListViewPresenter);
    }

    getDeleteEvent(){
        return this._deleteEvent;
    }

    openDeleteListView(listId,nameList){
        this._presenter.openDeleteListView(listId,nameList);
    }
}
