/**The publish "createList" with one parameter, the list data, you want to ad in Database
 * @param listData {ListData}
 * Created by lucadario on 29/03/17.
 * version 3.0.0-completed
 */



import {container,inject} from 'dependency-injection-es6';
import {ManageListsUseCase} from '../usecase/ManageListsUseCase';
import {ListData} from '../../data/ListData';


/**
 * this Publish Save in db the listData with USeCase {ManageListData}
 * @param listData {ListData} the information of the lst
 */


Meteor.publish('createList',function (listData) {

    const manageList = container.resolve(ManageListsUseCase);
    const list = fromJSONValue(listData);
    manageList.createList(list.getId(),list);
    this.ready();

});


/**
 * @function
 * This function creates a list bubble from a json.
 * @param json : it represents the message which has the parameters of the list inside.
 * @return {ListData} : the list created after the parse of the message
 */

function fromJSONValue(json) {
    const list = new ListData();
    list.setId(json._id);
    list.setImagePath(json._imagePath);
    list.setName(json._name);
    list._items = json._items;
    list.setCreatorId(json._creatorId);
    list._users = json._users;

    return list;
}
