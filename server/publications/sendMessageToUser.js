/**
 * Created by liast on 24/04/2017
 * Version {VERSION} - {VERSION_NOTES}
 */


Meteor.publish('sendMessageToUser', (targetUsername,json) => {

    RocketChat.models.Users.findOneByUsername(targetUsername);

    let user = RocketChat.models.Users.findOneById('rocket.cat');
    let roomId = getRoomId(targetUsername);

    console.log(roomId);
    console.log(json);

    RocketChat.sendMessage(user, json, { _id: roomId});
});


function getRoomId(roomName) {
    roomName = roomName.replace('@');
    const room = RocketChat.models.Rooms.findOneByName(roomName, { fields: { _id: 1, t: 1 } });
    if (room && (room.t === 'c' || room.t === 'p')) {
        return room._id;
    } else {
        this.reporting = false;
    }
}