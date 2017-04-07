/**
 * Created by liast on 31/03/2017
 * Version {VERSION} - {VERSION_NOTES}
 */

import {container,inject} from 'dependency-injection-es6';
import {ChatSource} from "../../client/chat/ChatSource";
import {DatabaseSource} from "../database/DatabaseSource";
import { HTTP } from 'meteor/http'
export class ShowPopupUseCase{

    /**
     * Public constructor.
     */
    constructor(){
        this._chatSource = container.resolve(ChatSource);
        this._databaseSource = container.getInstanceOf(DatabaseSource);
    }

    showPopup(html){
        let content = '<div id="myModal" class="modal fade" role="dialog">'+
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
        //this._chatSource.showPopup(content);
        return content;
    }
}
// Be sure that each instance of this class that will be injected is always the same
container.registerAsSingleton(ShowPopupUseCase);

Meteor.startup(function () {
    Tracker.autorun(function () {
        let pop = new ShowPopupUseCase();
        let html = pop.showPopup('<p> CIAO </p>');
    })
});
    /*
 Meteor.call('getRoomIdByNameOrId', "ciao", function (error, result) {
 Meteor.call('getUsersOfRoom', result, true, function (error1, result1) {
 if (result) {
 alert("Trovato il risultato");
 console.log("====PROVA====");
 console.log('Item: ' + result1.records);
 let share = new ShareWithGroupViewImpl();
 share.openShareWithGroupView(result, result1.records);
 }
 else if (error1) {
 alert(error1);
 }
 });
 })
 }
 })
 */