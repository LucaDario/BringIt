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
                const useCase = container.resolve(ModifyListUseCase);
                const listData = new ListData();
                listData.setName('The best list ever made');
                const item = new ListItem();
                useCase.addItemToList(listData.getId(), item);
            });
    });

    it('Verify GetListInfoUseCase remove an element in the list [TU55]', function () {
        expect(
            () => {
                Meteor.isTest = true;
                const useCase = container.resolve(ModifyListUseCase);
                const listData = new ListData();
                listData.setName('The best list ever made');
                const item = new ListItem();
                useCase.addItemToList(listData.getId(), item);
                useCase.removeItemFromList(listData.getId(), item);
            });
    });

    it('Verify GetListInfoUseCase update an element of the list [TU56]', function () {
        expect(
            () => {
                Meteor.isTest = true;
                const useCase = container.resolve(ModifyListUseCase);
                const listData = new ListData();
                listData.setName('The best list ever made');
                const item = new ListItem();
                useCase.addItemToList(listData.getId(), item);
                useCase.updateItemInsideList(listData.getId(), item);
            });
    });

    it('Verify ModifyListUseCase works properly with DatabaseSource [TI38]', function () {
        Meteor.isTest = true;

        const useCase = container.resolve(ModifyListUseCase);

        const listData = new ListData();
        listData.setName('Tryout');

        useCase.saveList(listData);

        const listItem = new ListItem();
        listItem.setName('First item');
        listItem.setDescription('First item description');

        useCase.addItemToList(listData.getId(), listItem);

        listItem.setQuantity(10);
        listItem.addNote('Tryout');
        useCase.updateItemInsideList(listData.getId(), listItem);

        useCase.removeItemFromList(listData.getId(), listItem);
    });
})