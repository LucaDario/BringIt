/**
 * Created by Stefano Lia on 01/05/2017
 * Version 1.0.0 - Initial version
 */

import {container,inject} from 'dependency-injection-es6';
import {ListItem} from "../../data/ListItem";
import {ListData} from "../../data/ListData";
import {GetItemInfoUseCase} from './GetItemInfoUseCase';

/**
 * Tests.
 */

describe('GetItemInfoUseCase', function () {

    it('Verify GetItemInfoUseCase works properly with DatabaseSource [TI34]', function () {

        Meteor.isTest = true;
        const useCase = container.resolve(GetItemInfoUseCase);

        const listData = new ListData();
        listData.setName('The best list ever made');
        const item1 = new ListItem();
        item1.setDescription("First item");
        const item2 = new ListItem();
        item1.setDescription("Second item");
        listData.addItem(item1);
        listData.addItem(item2);

        const listData2 = new ListData();
        listData.setName('The best list ever made 2');
        const item11 = new ListItem();
        item1.setDescription("First item 2");
        const item21 = new ListItem();
        item1.setDescription("Second item 2");
        listData2.addItem(item11);
        listData2.addItem(item21);

        useCase._databaseSource.saveList(listData);
        useCase._databaseSource.saveList(listData2);

        const dbItem = useCase.getItemInfo(listData.getId(), item1.getId());
        expect(dbItem).to.not.equal(undefined);

        });
});
