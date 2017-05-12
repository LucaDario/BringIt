/**
 * Created by Stefano Lia on 02/05/2017
 * Version 1.0.0 - Initial version
 */

import {container,inject} from 'dependency-injection-es6';
import {ListData} from "../../data/ListData";
import {ManageListsUseCase} from "./ManageListsUseCase";

describe('ManageListUseCase', function () {

    it('Verify ManageListsUseCase works properly with DatabaseSource [TI26]', function () {
        expect(
            () => {
                Meteor.isTest = true;

                const useCase = container.resolve(ManageListsUseCase);
                useCase._databaseSource.clear();
                useCase._databaseSource.getLists();

                const listData = new ListData();
                listData.setName('Tryout');

                useCase.deleteList(insertedList1.getId());
            });
    });
});