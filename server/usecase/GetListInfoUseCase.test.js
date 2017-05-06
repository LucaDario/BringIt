/**
 * Created by Stefano Lia on 02/05/2017
 * Version 1.0.0 - Initial version
 */

import {container,inject} from 'dependency-injection-es6';
import {ListItem} from "../../data/ListItem";
import {ListData} from "../../data/ListData";
import {GetListInfoUseCase} from './GetListInfoUseCase';


/**
 * Tests.
 */

describe('GetListInfoUseCase', function () {

    it('Verify GetListInfoUseCase works properly with DatabaseSource [TI29]', function () {
        expect(
            () => {
                Meteor.isTest = true;
                let useCase = container.resolve(GetListInfoUseCase);

                const listData = new ListData();
                listData.setName('The best list ever made');
                let item1 = new ListItem();
                item1.setDescription("First item");
                let item2 = new ListItem();
                item1.setDescription("Second item");

                listData.addItem(item1);
                listData.addItem(item2);

                useCase._databaseSource.saveList(listData);

                useCase.getListData(listData.getId());
            });
    });
});