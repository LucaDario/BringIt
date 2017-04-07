/**
 * Send Message in RocketChat
 * Created by lucadario on 03/04/17.
 */

/**
 * @param roomName {string} name of the room
 * @param message {string} message in html to be send
 */
Meteor.publish('sendMessage', (roomName,message) =>{

    let user = RocketChat.models.Users.findOneById('rocket.cat');
    let roomId = getRoomId(roomName);


    RocketChat.sendMessage(user, {
        msg: 'Lista della spesa ' + message,
        listData : {
            creator: "ProvaId"
        },
        bubbleType: 'todo'
    }, { _id: roomId});

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