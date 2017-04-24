/**
 * Created by liast on 23/04/2017
 * Version {VERSION} - {VERSION_NOTES}
 */


Meteor.methods({
    getUsers() {
        let users = RocketChat.models.Users.findUsersNotOffline({
            fields: {
                username: 1
            }
        }).fetch();

        return users;
    }
});



/*Meteor.publish('getUsers', function() {
    if (!this.userId) {
        return this.ready();
    }

    let users = RocketChat.models.Users.findUsersNotOffline({
        fields: {
            username: 1,
            status: 1,
            utcOffset: 1
        }
    }).fetch();
    console.log(users);

    return users;
});
*/