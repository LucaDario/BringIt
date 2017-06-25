/**
 * Created by Stefano Lia on 26/04/2017
 * Version 1.0.1 - Completed
 * This method get from the database the id of a specific message
 */

Meteor.methods({
    getMessage(id){
        return RocketChat.models.Messages.find({ "_id":id}).fetch();
    }
});