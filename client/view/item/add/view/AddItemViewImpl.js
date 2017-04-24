/**
 * The concrete class od AddItemViewImpl.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.0 -
 */

import {AddItemViewPresenter} from '../presenter/AddItemViewPresenter';
import {AddItemView} from '../AddItemView';
import {SaveItemEvent} from '../../../../event/SaveItemEvent';
import {ListItem} from '../../../../../data/ListItem';


export class AddItemViewImpl extends AddItemView{
    /**
     * @type {Object}: Presenter of AddItemViewImpl
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
        this._eventitem= container.resolve(SaveItemEvent);
        this._eventitem.on('saveEventItem',(item) =>{

            let quantity=item.getQuantity();
           let note=item.getNotes();
           let unita_di_misura=item.getMeasurementUnit();
           let descrizione= item.getDescription();
           let immagine= item.getImagePath();











        });
    }




    /**
     *@method
     * It allows you to add a new item into bringit
     * @param listId {String}
     * @param item {Object}
     */
    addItem(listId,item){
        this._presenter.addNewItem(listId,item);
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
