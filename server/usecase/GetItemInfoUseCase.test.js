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

    it('Verify GetItemInfoUseCase returns the item info using an ID [TU59]', function () {
        expect(
            () => {
                Meteor.isTest = true;
                let useCase = container.resolve(GetItemInfoUseCase);

                //console.log('Inserting some lists');

                const listData = new ListData();
                listData.setName('The best list ever made');
                let item1 = new ListItem();
                item1.setDescription("First item");
                listData.addItem(item1);
                useCase._databaseSource.saveList(listData);
                useCase.getItemInfo(listData.getId(),item1.getId());
            }
        ).to.not.throw();
    });

    it('Verify GetItemInfoUseCase works properly with DatabaseSource [TI47]', function () {

        expect(
            () => {
                //console.log('');
                //console.log('=== GET ITEM INFO USE CASE ===');

                // For recursive printing
                Meteor.isTest = true;
                const util = require('util');

                let useCase = container.resolve(GetItemInfoUseCase);

                //console.log('Inserting some lists');

                const listData = new ListData();
                listData.setName('The best list ever made');
                let item1 = new ListItem();
                item1.setDescription("First item");
                let item2 = new ListItem();
                item1.setDescription("Second item");

                listData.addItem(item1);
                listData.addItem(item2);

                const listData2 = new ListData();
                listData.setName('The best list ever made 2');
                let item11 = new ListItem();
                item1.setDescription("First item 2");
                let item21 = new ListItem();
                item1.setDescription("Second item 2");

                listData2.addItem(item11);
                listData2.addItem(item21);

                useCase._databaseSource.saveList(listData);
                useCase._databaseSource.saveList(listData2);

                // Should print an object with the proper data
                //console.log('Retrieving items 1 and 11');
                //console.log(useCase.getItemInfo(item1.getId()));
                //console.log(useCase.getItemInfo(item21.getId()));
            }).to.not.throw();

        });
});
