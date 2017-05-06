/**
 * Created by Francesco Bazzerla on 20/04/2017
 * Version 1.0.0 - Completed
 */

import {DeleteListViewImpl} from './DeleteListViewImpl';
import {ShowPopupUseCase} from '../../../../usecase/ShowPopupUseCase';

Meteor.startup (function () {
    //add the button to share the ToDoListBubble
    RocketChat.MessageAction.addButton({
        "id": 'share-pin',
        "icon": 'icon-forward',
        "i18nLabel": 'Delete list',
        "context": [
            'message',
            'message-mobile'
        ],
        "action": (event, instance) => {
            let popup = new ShowPopupUseCase();

                    let message = $(event.currentTarget).closest('.message')[0];

                    //make the html which will be shown inside the popup
                    let html = '<select id="sites" name="sites[]" class="form-control" multiple="multiple">';
                    for(let i=0; i<result.channels.length; i++){
                        html = html + '<option data-tokens="'+result.channels[i].name+'">'
                            +result.channels[i].name+'</option>';
                    }
                    html = html + '</select>';

                    popup.showPopupAndShare(html,message);
        },
        "validation": (message) => {
            console.log(message);
            if(message.listData !== undefined){
                return message.listData.creator === Meteor.userId();
            }
            return false;
        }
    })
})
