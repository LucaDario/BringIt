/**
 * Created by Stefano Lia on 02/05/2017
 * Version 1.0.0 - Initial version
 */

import {container,inject} from 'dependency-injection-es6';
import {ListData} from "../../data/ListData";
import {ManageListsUseCase} from "./ManageListsUseCase";

describe('ManageListUseCase', function () {

    it('Verify ManageListsUseCase returns the list [TU59]', function () {
        expect(
            () => {
                Meteor.isTest = true;
                let useCase = container.resolve(ManageListsUseCase);
                const listData = new ListData();
                listData.setName('The best list ever made');
                useCase.deleteList(listData.getId());
            });
    });
    it('Verify ManageListsUseCase works properly with DatabaseSource [TI31]', function () {
        expect(
            () => {
                Meteor.isTest = true;
                const util = require('util');

                let useCase = container.getInstanceOf(ManageListsUseCase);
                useCase._databaseSource.clear();
                useCase._databaseSource.getLists();

                let listData = new ListData();
                listData.setName('Tryout');

                /*console.log('List insertion with data');
                 let insertedList1 = useCase.createList(1, listData);
                 console.log(util.inspect(useCase._databaseSource.getLists(), false, null));

                 console.log('List insertion without data');
                 useCase.createList(2);
                 console.log(util.inspect(useCase._databaseSource.getLists(), false, null));*/

                console.log('List removing');
                useCase.deleteList(insertedList1.getId());
                console.log(util.inspect(useCase._databaseSource.getLists(), false, null));
            });
    });
});




/*
Meteor.startup(function () {
    if(Meteor.isServer){
        console.log('');
        console.log('=== MANAGE LISTS USE CASE ===');

        // For recursive printing
        const util = require('util');

        let useCase = container.getInstanceOf(ManageListsUseCase);
        console.log('Clear database');
        useCase._databaseSource.clear();
        console.log(useCase._databaseSource.getLists());

        console.log('Performing some tests');

        let listData = new ListData();
        listData.setName('Tryout');

        console.log('List insertion with data');
        let insertedList1 = useCase.createList(1, listData);
        console.log(util.inspect(useCase._databaseSource.getLists(), false, null));

        console.log('List insertion without data');
        useCase.createList(2);
        console.log(util.inspect(useCase._databaseSource.getLists(), false, null));

        console.log('List removing');
        useCase.deleteList(insertedList1.getId());
        console.log(util.inspect(useCase._databaseSource.getLists(), false, null));

    }
});
*/