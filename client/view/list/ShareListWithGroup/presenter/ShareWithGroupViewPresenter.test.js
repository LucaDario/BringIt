/**
 * Created by Stefano Lia on 27/04/2017
 * Version 1.0.0 - Initial version
 */

import {ShareWithGroupViewPresenter} from './ShareWithGroupViewPresenter';
import {ShareWithGroupViewImpl} from '../view/ShareWithGroupViewImpl';
import {ListData} from '../../../../../data/ListData';
import { Meteor } from 'meteor/meteor';

describe('ShareWithGroupViewPresenter', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ShareWithGroupViewPresenter(new ShareWithGroupViewImpl()); //NOSONAR
            }
        ).to.not.throw();
    });
});