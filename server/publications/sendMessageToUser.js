/**
 * Created by Stefano Lia on 16/05/2017
 * Version 1.0.0 - Initial version
 */
Meteor.publish('sendMessageToUser', (userRd,json) =>{

    const user = RocketChat.models.Users.findOneById(json.listData._creatorId);

    RocketChat.sendMessage(user, json, { _id: userRd});

});
