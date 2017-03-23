/**
 * The presenter of DeleteListViewImpl.
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.0 -
 */

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
     * @param useCase {Object}
     */
    constructor(view,useCase){
        this._view = view;
        this._manageList = useCase;
    }

    /**
     * @method
     *Generates HTML CSS JS needed to display the widget.
     * @return {String}
     */
    renderView(){
        // TODO: Implement this
    }
}
