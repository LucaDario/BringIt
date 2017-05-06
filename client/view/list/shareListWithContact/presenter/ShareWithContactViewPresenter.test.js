/**
 * Created by Stefano Lia on 27/04/2017
 * Version 1.0.2 - Completed
 * Unit tests of ShareWithContactViewPresenter
 */

import {ShareWithContactViewPresenter} from './ShareWithContactViewPresenter';
import {ShareWithContactViewImpl} from '../view/ShareWithContactViewImpl';
import {ListData} from '../../../../../data/ListData';

describe('ShareWithContactViewPresenter', function () {
    it("Check that is possible to share a message using onClickShareWithContact [TU60]", function () {

        expect(
            () => {
                const share = new ShareWithContactViewImpl();

                // create a Bringit message
                const listData = new ListData();
                listData.setName('Test');
                listData.setCreatorId(this.userId);
                const json = {
                    "bubbleType": 'Bringit',
                    "listData": listData
                }

                //try to share the message
                share._presenter.onClickShareWithContact('rocket.cat', json);
            }).to.not.throw();
    });
});