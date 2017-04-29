/**
 * Created by lucadario on 26/04/17.
 */

import {ModifyListUseCase} from '../usecase/ModifyListUseCase';
import {container,inject} from 'dependency-injection-es6';

/**
 * publish with 2 params, listId and listItem, this publish add a new item(listItem)
 * in a Bringit with a _id == listId
 */
Meteor.publish('addItemInList',function (listId,listItem) {


    let modifyLIstUseCase = container.resolve(ModifyListUseCase);
    modifyLIstUseCase.addItemToList(listId,listItem);

});
