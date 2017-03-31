/**
 * Created by liast on 31/03/2017
 * Version {VERSION} - {VERSION_NOTES}
 */

import {ShowPopupUseCase} from "../../../../../server/usecase/ShowPopupUseCase"

export class ShareWithGroupViewPresenter{

    constructor(view){
        this._view = view;
        this._showCase = new ShowPopupUseCase();
    }
    openShareWithGroupView(groupId, listId){

    }
}