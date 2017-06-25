/**
 * Created by Stefano Lia on 06/05/2017
 * Version 1.0.0 - Initial version
 * Unit tests of InputItemInfoViewPresenter
 */


import {InputListInfoViewImpl} from '../view/InputListInfoViewImpl';

describe('InputListInfoViewPresenter', function () {
    it('Check if InputListInfoViewPresenter creates correctly a listData [TU58]', function () {
        Meteor.isTest = true;
        const input = new InputListInfoViewImpl();
        let image = input._presenter.createListData('test','path');
        expect(image).to.not.equal(undefined);
    });
});