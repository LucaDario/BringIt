/**
 * Created by lucadario on 23/04/17.
 */

import {ModifyListUseCase} from '../usecase/ModifyListUseCase';
import {container,inject} from 'dependency-injection-es6';
import {ListItem} from '../../data/ListItem';
/**
 * Delete a item in database with a item in database  == item in a Bringit list with a id == listId
 */
Meteor.publish('deleteItem', function (listId,listItem) {

    const modifyListUseCase = container.resolve(ModifyListUseCase);
    let objectListItem = new ListItem();
    objectListItem.setId(listItem._id);
    objectListItem.setDescription(listId._description);
    objectListItem.setImagePath(listItem._imagePath);
    objectListItem.setMeasurementUnit(listItem._measurementUnit);
    objectListItem.setName(listItem._name);
    objectListItem.setQuantity(listItem._quantity);
    objectListItem.setStatus(listItem._status);

    //predisposto per array di note
    for(let j = 0; j < listItem._notes.length; j++){
        objectListItem.addNote(listItem._notes[j]);
    }

    modifyListUseCase.removeItemFromList(listId,objectListItem);
});
