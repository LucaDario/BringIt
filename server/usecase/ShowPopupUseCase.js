/**
 * Created by liast on 31/03/2017
 * Version {VERSION} - {VERSION_NOTES}
 */

import {container,inject} from 'dependency-injection-es6';
import {ChatSource} from "../client/chat/ChatSource";
import {DatabaseSource} from "../database/DatabaseSource";

export class ShowPopupUseCase{

    /**
     * Public constructor.
     */
    constructor(){
        this._chatSource = container.resolve(ChatSource);
        this._databaseSource = container.getInstanceOf(DatabaseSource);
    }

    showPopup(html){
    return '<div id="myModal" class="modal fade" role="dialog">'+
                '<div class="modal-dialog">'+
                '<!-- Modal content-->'+
                    '<div class="modal-content">'+
                        '<div class="modal-header">'+
                            '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                            '<h4 class="modal-title">Modal Header</h4>'+
                        '</div>'+
                        '<div class="modal-body">'+
                            html+
                        '</div>'+
                        '<div class="modal-footer">'+
                            '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>';
    }

    getGroup(){
        this._databaseSource;
    }
}