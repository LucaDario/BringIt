
import {container, singleton, inject} from 'dependency-injection-es6';
import {ShowPopupUseCase} from '../../usecase/ShowPopupUseCase';


/**
 * This script set event when the button with  class '.btn' clicked, and the event
 *  call InputListInfoViewImpl.onSaveClicked
 *
 */
function showlayoutadd(layout) {

    let showPop = container.resolve(ShowPopupUseCase);



    let immage = layout.getItems()[1];
    let description = layout.getItems()[4];
    let name= layout.getItems()[0].getText();

    let new_layout= new Monolith.layout.VerticalLayoutView;
    immage.setHeight(10);
    immage.setWidth(10);
    new_layout.addItem(immage);
    new_layout.addItem(description);
    showPop.showPopup(name,new_layout.renderView());



}
export {showlayoutadd};
