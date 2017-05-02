/**
 * Created by Stefano Lia on 31/03/2017
 * version 4.0.0 - completed
 * Description: This class is the presenter of the 'share with group' functionality
 */
import {ChatSource} from "../../../../chat/ChatSource";
import {container, singleton, inject} from 'dependency-injection-es6';
import {ShowPopupUseCase} from '../../../../usecase/ShowPopupUseCase';

export class ShareWithGroupViewPresenter{

    /**
     * Public constructor
     */
    constructor(){
        this._chat = container.resolve(ChatSource);
    }

    /**
     * @method
     * This method sends a message to each group selected by the user. However it's possible to give permissions to
     * the members of the group (or groups) chosen. This choice can be made with a popup which will be created by this method.
     * @param group {array} : groups that the user wants to send message to
     * @param json {JSON} : the message which will be sent
     */
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
                            //true if there are users available in the channel
                            let cond = false;
                            let show = container.resolve(ShowPopupUseCase);

                            //html of the popup
                            let html = '<h3> Channel: '+group[i]+'</h3>' +
                                '<h4 style="color: #FFFFFF">Choose a member who give permission to modify ' +
                                'the list to</h4>' +
                                '<select id="sites" name="sites[]" class="form-control" multiple="multiple">';
                            for(let i=0; i<result2.records.length; i++){

                                //add the member if he is not the user who makes the request
                                if(result2.records[i] !== Meteor.user().username && result2.records[i] !== 'rocket.cat') {
                                    if(cond === false){
                                        cond = true;
                                    }
                                    html = html + '<option data-tokens="' + result2.records[i] + '">'
                                        + result2.records[i] + '</option>';
                                }
                            }
                            html = html + '</select>';

                            //callback that will be executed after popup's closing
                            let f = function () {
                                let selected = $('#sites').val(); //get user's choice
                                for(let i=0; i<selected.length;i++) {
                                    Meteor.call('getIdUser', selected[i], true, function (error, result) {
                                        if(result) {
                                            console.log(result);
                                            Meteor.subscribe('sendPermissionsContact', json.listData._id, result);
                                        }
                                        else{
                                            console.log(error);
                                        }
                                    });
                                }
                            };

                            //show the popup
                            if(cond) {
                                show.showPopupWithFunction(html, f);
                            }
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
