/**
 * Created by Francesco Bazzerla on 20/04/2017
 * Version 1.0.0 - Completed
 */
import {container,inject} from 'dependency-injection-es6';
import {DeleteListViewImpl} from '../../../../view/list/delete/view/DeleteListViewImpl';
import {DeleteListEventEmitter} from '../../../../event/DeleteListEventEmitter';

Meteor.startup (function () {
    const deleteView = new DeleteListViewImpl();
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
            const listId = message.listData._id;
            const nameList = message.listData._name;
            const delEvent = container.resolve(DeleteListEventEmitter);
            delEvent.emitDeleteThis(listId,nameList);
        },
        "validation": (message) => {
            console.log(message);
            if(message.listData !== undefined && message.listData._creatorId === Meteor.userId()){
                return message.listData._creatorId === Meteor.userId();
            }
            return false;
        }
    })
});
