/**The publish "createList" with one parameter, the list data, you want to ad in Database
 * @param listData {ListData}
 * Created by lucadario on 29/03/17.
 */



import {container,inject} from 'dependency-injection-es6';
import {ManageListsUseCase} from '../usecase/ManageListsUseCase';
import {ListData} from '../../data/ListData';


/**
 * this Publish Save in db the listData with USeCase {ManageListData} and send message
 * in the room in which it is.
 * @param listData {ListData} the information of the lst
 * @param nameRoom {string} name of the room in which it is.
 */


Meteor.publish('createList',function (listData,roomName) {

    let manageList = container.resolve(ManageListsUseCase);
    let list = fromJSONValue(listData);
    manageList.createList(list.getId(),list);

    let user = RocketChat.models.Users.findOneById('rocket.cat');
    //provvisorio, prima devo capire quando va a buon fine il tutto

    RocketChat.sendMessage(user, { msg: 'Lista della spesa ' + list.getName() }, { _id: getRoomId(roomName)});


    this.ready();




});


//provvisorio
function fromJSONValue(json) {
    let list = new ListData();
    list.setId(json._id);
    list.setImagePath(json._imagePath);
    list.setName(json._name);
    list._items = json._items;
    list.setCreatorId(json._creatorId);
    list._users = json._users;

    return list;
}

function getRoomId(roomName) {
    roomName = roomName.replace('#');
    const room = RocketChat.models.Rooms.findOneByName(roomName, { fields: { _id: 1, t: 1 } });
    if (room && (room.t === 'c' || room.t === 'p')) {
        return room._id;
    } else {
        this.reporting = false;
    }
}