/**
 * Created by Stefano Lia on 02/05/2017
 * Version 1.0.0 - Initial version
 * Unit and integration tests which involve ModifyListUseCase
 */

import {container,inject} from 'dependency-injection-es6';
import {ListItem} from "../../data/ListItem";
import {ListData} from "../../data/ListData";
import {ModifyListUseCase} from "./ModifyListUseCase";

describe('ModifyListUseCase', function () {

    it('Verify GetListInfoUseCase saves an element into the list [TU54]', function () {
        expect(
            () => {
                Meteor.isTest = true;
                let useCase = container.resolve(ModifyListUseCase);
                let listData = new ListData();
                listData.setName('The best list ever made');
                let item = new ListItem();
                useCase.addItemToList(listData.getId(), item);
            });
    });

    it('Verify GetListInfoUseCase remove an element in the list [TU55]', function () {
        expect(
            () => {
                Meteor.isTest = true;
                let useCase = container.resolve(ModifyListUseCase);
                let listData = new ListData();
                listData.setName('The best list ever made');
                let item = new ListItem();
                useCase.addItemToList(listData.getId(), item);
                useCase.removeItemFromList(listData.getId(), item);
            });
    });

    it('Verify GetListInfoUseCase update an element of the list [TU56]', function () {
        expect(
            () => {
                Meteor.isTest = true;
                let useCase = container.resolve(ModifyListUseCase);
                let listData = new ListData();
                listData.setName('The best list ever made');
                let item = new ListItem();
                useCase.addItemToList(listData.getId(), item);
                useCase.updateItemInsideList(listData.getId(), item);
            });
    });

    it('Verify ModifyListUseCase works properly with DatabaseSource [TI22]', function () {
        // For recursive printing
        const util = require('util');
        Meteor.isTest = true;

        let useCase = container.resolve(ModifyListUseCase);

        let listData = new ListData();
        listData.setName('Tryout');

        useCase.saveList(listData);
        //console.log(util.inspect(useCase._databaseSource.getLists(), false, null));


        let listItem = new ListItem();
        listItem.setName('First item');
        listItem.setDescription('First item description');

        useCase.addItemToList(listData.getId(), listItem);
        //console.log(util.inspect(useCase._databaseSource.getLists(), false, null));

        listItem.setQuantity(10);
        listItem.addNote('Tryout');
        useCase.updateItemInsideList(listData.getId(), listItem);
        //console.log(util.inspect(useCase._databaseSource.getLists(), false, null));

        useCase.removeItemFromList(listData.getId(), listItem);
        //console.log(util.inspect(useCase._databaseSource.getLists(), false, null));
    });
})