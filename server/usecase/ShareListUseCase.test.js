/**
 * Created by Stefano Lia on 02/05/2017
 * Version 1.0.0 - Initial version
 */

import {ShareListUseCase} from "./ShareListUseCase";
import {container,inject} from 'dependency-injection-es6';
import {ListItem} from "../../data/ListItem";
import {ListData} from "../../data/ListData";

describe('ShareListUseCase', function () {
    it('Verify ShareList shares add the user in the _user field and works properly with ' +
        'the database [TI25]', function () {
        expect(
            () => {
                Meteor.isTest = true;
                const useCase = container.resolve(ShareListUseCase);
                const listData = new ListData();
                useCase.shareListWithContact(listData.getId(), 'rocket.cat');
            });
    });
});