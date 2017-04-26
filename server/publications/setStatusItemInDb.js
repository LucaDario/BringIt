/**
 * Created by lucadario on 22/04/17.
 */

import {ModifyListUseCase} from '../usecase/ModifyListUseCase';
import {container,inject} from 'dependency-injection-es6';

Meteor.publish('setStatusItemInDb',function (listId,itemId,status) {

    const modifyListUseCase = container.resolve(ModifyListUseCase);


});

