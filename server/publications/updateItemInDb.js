/**
 * Created by lucadario on 22/04/17.
 * version 3.2.0-completed
 */

import {ModifyListUseCase} from '../usecase/ModifyListUseCase';
import {container,inject} from 'dependency-injection-es6';
import {ListItem} from '../../data/ListItem';

/**
 * Update a item in database with a same id in Bringit list with a id == listId
 */

Meteor.publish('updateItem',function (listId, listItem) {

    //recreate a listItem serialized

    const modifyListUseCase = container.resolve(ModifyListUseCase);
    let objectListItem = new ListItem();
    objectListItem.setId(listItem._id);
    objectListItem.setDescription(listItem._description);
    objectListItem.setImagePath(listItem._imagePath);
    objectListItem.setMeasurementUnit(listItem._measurementUnit);
    objectListItem.setName(listItem._name);
    objectListItem.setQuantity(listItem._quantity);
    objectListItem.setStatus(listItem._status);

    //predisposto per array di note
    for(let j = 0; j < listItem._notes.length; j++){
        objectListItem.addNote(listItem._notes[j]);
    }




    modifyListUseCase.updateItemInsideList(listId,objectListItem);


});

