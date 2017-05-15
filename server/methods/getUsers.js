/**
 * Created by Stefano Lia on 26/04/2017
 * Version 1.0.1 - Completed
 * This method get from the database all the users inside Rocket.chat
 */


Meteor.methods({
    getUsers() {
        return RocketChat.models.Users.find({}).fetch();
    }
});