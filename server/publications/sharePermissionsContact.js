/**
 * Created by Stefano Lia on 21/04/2017
 * Version {VERSION} - {VERSION_NOTES}
 */

import {ShareListUseCase} from '../usecase/ShareListUseCase';
import {container,inject} from 'dependency-injection-es6';

Meteor.publish('sendPermissionsContact', (idList,idContact) =>{

    console.log("Ora l'utente ha i permessi");
    let sharePermission = container.resolve(ShareListUseCase);
    sharePermission.shareListWithContact(idList, idContact);

});
