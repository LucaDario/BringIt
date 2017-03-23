/**
 * Created by Francesco Bazzerla on 22/03/17.
 */
export class DeleteListViewPresenter{
    /**
     * @type {DeleteListView}
     */
    _view;

    /**
     * @type {ManageListsUseCase}
     */
    _manageList;

    /**
     * @constructor
     * Constructor of DeleteListViewPresenter
     * @param view {DeleteListView}
     * @param useCase {ManageListsUseCase}
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
