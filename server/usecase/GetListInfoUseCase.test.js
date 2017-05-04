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

    it('Verify GetListInfoUseCase returns the list [TU59]', function () {
        expect(
            () => {
                Meteor.isTest = true;
                let useCase = container.resolve(GetListInfoUseCase);
                const listData = new ListData();
                listData.setName('The best list ever made');
                useCase.getListData(listData.getId());
            });
    });
    it('Verify GetListInfoUseCase works properly with DatabaseSource [TI41]', function () {
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

/*if(Meteor.isServer) {
    Meteor.startup(function () {
        console.log('');
        console.log('=== GET LIST INFO USE CASE ===');

        // For recursive printing
        const util = require('util');

        let useCase = container.resolve(GetListInfoUseCase);

        console.log('Inserting a list');

        let listData = useCase._databaseSource.createListForUserWithId(1);
        listData.setName('The best list ever made');
        let item1 = new ListItem();
        item1.setDescription("First item");
        let item2 = new ListItem();
        item1.setDescription("Second item");

        listData.addItem(item1);
        listData.addItem(item2);

        useCase._databaseSource.saveList(listData);

        // Should print an object with the proper data
        console.log('List created');

        console.log('Retrieving data');
        console.log(useCase.getListData(listData.getId()));

    });
}*/