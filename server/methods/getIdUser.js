/**
 * Created by Stefano Lia on 28/04/2017
 * Version 1.0.1 - Completed
 * This method get from the database the id of a specific user
 */


Meteor.methods({
    getIdUser(username){
        let user = RocketChat.models.Users.findOne({username});
        return user._id;
    }
});