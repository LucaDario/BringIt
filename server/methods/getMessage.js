/**
 * Created by liast on 26/04/2017
 * Version {VERSION} - {VERSION_NOTES}
 */

Meteor.methods({
    getMessage(id){
        return RocketChat.models.Messages.find({ "_id":id}).fetch();
    }
});