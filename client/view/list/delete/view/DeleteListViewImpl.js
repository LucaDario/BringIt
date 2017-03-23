/**
 * The concrete class od DeleteListViewImpl.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.0 -
 */

import {DeleteListView} from './DeleteListView'
import {DeleteListViewPresenter} from '../presenter/DeleteListViewPresenter'

export class DeleteListViewImpl extends DeleteListView{
    /**
     * @type {Object}: Presenter of DeleteListViewImpl
     */
    _presenter;

    /**
     * @constructor
     * Constructor of DeleteListViewImpl
     */
    constructor(){
        super();
        //TODO inject
        this._presenter = new DeleteListViewPresenter(this,null);
    }

    /**
     * @method
     *Generates HTML CSS JS needed to display the widget.
     * @return {String}
     */
    renderView(){
        return this._presenter.renderView();
    }
}
