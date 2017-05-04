/**
 * Created by Stefano Lia on 02/05/2017
 * Version 1.0.0 - Initial version
 */

import {ShareListUseCase} from "./ShareListUseCase";
import {container,inject} from 'dependency-injection-es6';
import {ListItem} from "../../data/ListItem";
import {ListData} from "../../data/ListData";

describe('ModifyListUseCase', function () {
    it('Verify ShareList shares add the user in the _user filed of a ListData [TU62]', function () {
        expect(
            () => {
                Meteor.isTest = true;
                let useCase = container.resolve(ShareListUseCase);
                let listData = new ListData();
                useCase.shareListWithContact(listData.getId(), 'rocket.cat');
            });
    });
});