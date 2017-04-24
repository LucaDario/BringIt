/**
 * Created by Francesco Bazzerla on 20/04/2017
 * Version 1.0.0 - Completed
 */
import {container,inject} from 'dependency-injection-es6';
import {DeleteListViewImpl} from './DeleteListViewImpl';
import {ShowPopupUseCase} from '../../../../usecase/ShowPopupUseCase';

Meteor.startup (function () {
    //add the button to delete the list
    RocketChat.MessageAction.addButton({
        "id": 'deleteList-pin',
        "icon": 'icon-cancel',
        "i18nLabel": 'Delete list',
        "context": [
            'message',
            'message-mobile'
        ],
        "action": (event, instance) => {
            this._deleteEvent = container.resolve(DeleteListEventEmitter);
            let deleteList = new DeleteListViewImpl();
            this._deleteEvent.on('deleteEvent', (listId) => {
                Meteor.subscribe('deleteList',listId, {
                    onReady: () => {

                    }
                });
            });
        },
        "validation": (message) => {
            console.log(message);
            if(message.listData !== undefined){
                return message.listData._creatorId === Meteor.userId();
            }
            return false;
        }
    })
});
