/**
 * Created by Francesco Bazzerla on 25/05/2017
 * Version 3.0.1 - Completed
 */

import {ShareListUseCase} from '../usecase/ShareListUseCase';
import '../methods/getIdUser';
import {container,inject} from 'dependency-injection-es6';

Meteor.publish('removePermissionContact', (idList,idContact) =>{
    const sharePermission = container.resolve(ShareListUseCase);
    sharePermission.removeListPermission(idList, idContact);

});
