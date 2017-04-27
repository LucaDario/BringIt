/**
 * Created by Stefano Lia on 26/04/2017
 * Version {VERSION} - {VERSION_NOTES}
 */

import {ShareWithContactViewImpl} from './ShareWithContactViewImpl';
import {ListData} from '../../../../../data/ListData';

describe('ShareWithContactViewImpl', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ShareWithContactViewImpl(); //NOSONAR
            }
        ).to.not.throw();
    });
    it("Check correct sharing", function () {
        const share = new ShareWithContactViewImpl();
        const listData = new ListData();
        listData.setName('Test');
        listData.setCreatorId(this.userId);
        const json = {
            "bubbleType": 'Bringit',
            "listData": listData
        }
        share.onClickShareWithContact('rocket.cat',json);
        return Meteor.call('getMessage',listData.getId(),function (error,result) {
            console.log(result);
            return result != undefined;
        })
    });
});