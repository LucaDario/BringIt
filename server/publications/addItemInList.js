/**
 * Created by lucadario on 26/04/17.
 */

import {ModifyListUseCase} from '../usecase/ModifyListUseCase';
import {container,inject} from 'dependency-injection-es6';

Meteor.publish('addItemInList',function (listId,listItem) {

    let modifyLIstUseCase = container.resolve(ModifyListUseCase);
    modifyLIstUseCase.addItemToList(listId,listItem);

});
