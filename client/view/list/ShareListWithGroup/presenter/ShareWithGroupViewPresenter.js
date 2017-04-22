/**
 * Created by Stefano Lia on 31/03/2017
 * Version {1.0.2} - {This class manages the sharing of a TodoListBubble in some channels. For each channel you can
 *                    choose some members (who are in the channel) and you can give to them permissions to modify the List
 *                    (add some items, delete items, ecc...)}
 */
import {ChatSource} from "../../../../chat/ChatSource";
import {container, singleton, inject} from 'dependency-injection-es6';
import {ShowPopupUseCase} from '../../../../usecase/ShowPopupUseCase';

export class ShareWithGroupViewPresenter{

    /**
     * Public constructor
     * @param view: it represents the view of this class
     */
    constructor(view){
        this._view = view;
        this._chat = container.resolve(ChatSource);
    }
    openShareWithGroupView(group,json){
        //send the message to the selected group
        for(let i=0; i<group.length; i++) {
            this._chat.sendMessageToChatWithJson(group[i], json);
        }

        //show the popup which contains the list of the members of the group
        for(let i=0; i<group.length; i++) {
            //Find the room's id
            Meteor.call('getRoomIdByNameOrId',group[i], function (error1,result1) {
                if(result1) {

                    //find the room's user
                    Meteor.call('getUsersOfRoom', result1, true, function (error2, result2) {
                        if (result2) {
                            let show = container.resolve(ShowPopupUseCase);

                            //html of the popup
                            let html = '<h3 style="color: #FFFFFF">Selezione il membro a cui dare i permessi</h3>' +
                                '<select id="sites" name="sites[]" class="form-control" multiple="multiple">';
                            for(let i=0; i<result2.records.length; i++){
                                html = html + '<option data-tokens="'+result2.records[i]+'">'
                                    +result2.records[i]+'</option>';
                            }
                            html = html + '</select>';

                            //callback that will be executed after popup's closing
                            let f = function () {
                                let selected = $('#sites').val(); //get user's choice
                                console.log(json);
                                for(let i=0; i<selected.length;i++) {
                                    Meteor.subscribe('sendPermissionsContact', json.listData.listData._id, selected);
                                }
                            }

                            //show the popup
                            show.showPopup(html,f);
                        }
                        else {
                            console.log(error2);
                        }
                    });
                }
                else{
                    console.log(error1);
                }
            });
        }
    }
}