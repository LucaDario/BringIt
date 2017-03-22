/**
 * Created by Francesco Bazzerla on 22/03/17.
 */

import {AddItemViewPresenter} from '../presenter/AddItemViewPresenter';
import {AddItemView} from './AddItemView';

export class AddItemViewImpl extends AddItemView{
    /**
     * @type {AddItemViewPresenter}
     */
    _presenter;

    /**
     * @constructor
     * Constructor of AddItemViewImpl
     */
    constructor(){
        super();
        //TODO inject
        this._presenter = new AddItemViewPresenter(this,null,null);
    }

    /**
     *@method
     * It allows you to add a new item into bringit
     * @param listId {String}
     * @param item {ListItem}
     */
    addItem(listId,item){
        this._presenter.addItem(listId,item);
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
