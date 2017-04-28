/**
 * Created by liast on 23/04/2017
 * Version {VERSION} - {VERSION_NOTES}
 */


Meteor.methods({
    getUsers() {
        let users = RocketChat.models.Users.find({}).fetch();

        return users;
    }
});