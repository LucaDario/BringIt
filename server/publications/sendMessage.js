/**
 * Send Message in RocketChat
 * Created by lucadario on 03/04/17.
 * version 3.4.0-completed
 */

/**
 * @param roomName {string} name of the room, not the id
 * @param json {json} json to put in the message to send
 */
Meteor.publish('sendMessageWithJson', (roomName,json) =>{

    let user = RocketChat.models.Users.findOneById('rocket.cat');
    let roomId = getRoomId(roomName);


    RocketChat.sendMessage(user, json, { _id: roomId});

});



/**
 * Convert name of room to Id room
 * @param roomName {string} name of the room
 * @return {string} id of the room
 */

function getRoomId(roomName) {
    roomName = roomName.replace('#');
    const room = RocketChat.models.Rooms.findOneByName(roomName, { fields: { _id: 1, t: 1 } });
    if (room && (room.t === 'c' || room.t === 'p')) {
        return room._id;
    } else {
        this.reporting = false;
    }
}