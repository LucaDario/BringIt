/**
 * Created by lucadario on 22/04/17.
 */

import {ModifyListUseCase} from '../usecase/ModifyListUseCase';
import {container,inject} from 'dependency-injection-es6';
import {ListItem} from '../../data/ListItem';

Meteor.publish('setStatusItemInDb',function (listId,listItem) {

    const modifyListUseCase = container.resolve(ModifyListUseCase);
    let objectListItem = new ListItem();
    objectListItem.setId(listItem._id);
    objectListItem.setDescription(listId._description);
    console.log(listId._description);
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

