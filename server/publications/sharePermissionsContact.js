/**
 * Created by Stefano Lia on 21/04/2017
 * Version {VERSION} - {VERSION_NOTES}
 * This method give permission to an user (identified by an ID) to add and remove items to a specific list.
 * It in interfaces with the database.
 *
 */

import {ShareListUseCase} from '../usecase/ShareListUseCase';
import '../methods/getIdUser';
import {container,inject} from 'dependency-injection-es6';

Meteor.publish('sendPermissionsContact', (idList,idContact) =>{
    let sharePermission = container.resolve(ShareListUseCase);
    sharePermission.shareListWithContact(idList, idContact);

});

