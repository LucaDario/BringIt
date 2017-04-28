/**
 * Created by Stefano Lia on 27/04/2017
 * Version 1.0.0 - Initial version
 */
/**
 * Created by Stefano Lia on 26/04/2017
 * Version {VERSION} - {VERSION_NOTES}
 */

import {ShareWithContactViewPresenter} from './ShareWithContactViewPresenter';
import {ShareWithContactViewImpl} from '../view/ShareWithContactViewImpl';
import {ListData} from '../../../../../data/ListData';

describe('ShareWithContactViewPresenter', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ShareWithContactViewPresenter(new ShareWithContactViewImpl()); //NOSONAR
            }
        ).to.not.throw();
    });
    it("Check correct sharing", function (done) {
        const share = new ShareWithContactViewImpl();
        const listData = new ListData();
        listData.setName('Test');
        listData.setCreatorId(this.userId);
        const json = {
            "bubbleType": 'Bringit',
            "listData": listData
        }
        share._presenter.onClickShareWithContact('rocket.cat',json);
        let message = Meteor.call('getMessage',listData.getId(),function (error,result) {
            done();
        });
        console.log(message);
        return message != undefined;
        done();
    });
});