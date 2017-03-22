    /**
    * Created by Francesco Bazzerla on 22/03/17.
    */
    class DeleteListViewImpl extends DeleteListView{
        /**
         * @type {DeleteListViewPresenter}
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
