/**
 * Created by Stefano Lia on 27/04/2017
 * Version 1.0.2 - Completed
 * Unit tests of ShareWithGroupViewPresenter
 */

import {ShareWithGroupViewImpl} from '../view/ShareWithGroupViewImpl';
import {ListData} from '../../../../../data/ListData';

describe('ShareWithGroupViewPresenter', function () {
    it('Check that is possible to share a message using openShareWithGroupView [TU59]', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                const share = new ShareWithGroupViewImpl();

                // create a bringit message
                const list = new ListData();
                const message = {
                    "bubbleType": "Bringit",
                    "listData": list
                }
                share._presenter.openShareWithGroupView(['general'],message);
            }
        ).to.not.throw();
    });
});