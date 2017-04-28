/**
 * Created by Stefano Lia on 28/04/2017
 * Version 1.0.0 - Initial version
 */


Meteor.methods({
    getIdUser(username){
        let user = RocketChat.models.Users.findOne({username});
        return user._id;
    }
});