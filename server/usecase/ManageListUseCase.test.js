/**
 * Created by Stefano Lia on 02/05/2017
 * Version 1.0.0 - Initial version
 */

import {container,inject} from 'dependency-injection-es6';
import {ListData} from "../../data/ListData";
import {ManageListsUseCase} from "./ManageListsUseCase";

describe('ManageListUseCase', function () {

    it('Verify ManageListsUseCase works properly with DatabaseSource [TI31]', function () {
        expect(
            () => {
                Meteor.isTest = true;
                const util = require('util');

                let useCase = container.resolve(ManageListsUseCase);
                useCase._databaseSource.clear();
                useCase._databaseSource.getLists();

                let listData = new ListData();
                listData.setName('Tryout');


                //console.log('List removing');
                useCase.deleteList(insertedList1.getId());
                //console.log(util.inspect(useCase._databaseSource.getLists(), false, null));
            });
    });
});