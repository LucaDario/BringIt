/**
 * Created by Francesco Bazzerla on 22/03/17.
 */
export class AddItemViewPresenter{
    /**
     * @type {AddItemView}
     */
    _view;

    /**
     * @type {InputItemInfoView}
     */
    _inputItemInfoView;

    /**
     * @type {ModifyListUseCase}
     */
    _modifyListUseCase;

    /**
     * @constructor
     * Constructor of AddItemViewPresenter
     * @param view {AddItemView}
     * @param inputView {InputItemInfoView}
     * @param useCase {ModifyListUseCase}
     */
    constructor(view,inputView,useCase){
        this._view = view;
        this._inputItemInfoView = inputView;
        this._modifyListUseCase = useCase;
    }

    /**
     * @method
     * Shows the graphics component required to input data into bringit.
     */
    _showInputItemInfoView(){

    }

    /**
     *@method
     * It allows you to add a new item into bringit
     * @param listId {String}
     * @param item {ListItem}
     */
    addItem(listId,item){
        this._view.addItem(listId,item);
    }
    /**
     * @method
     * Generates HTML CSS JS needed to display the widget.
     */
    renderView(){
        // TODO: Implement this
    }
}
