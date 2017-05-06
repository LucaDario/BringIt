/**
 * Created by Stefano Lia on 25/04/2017
 * Version 1.0.0 - Initial version
 * Unit tests of ShareWithGroupViewImpl
 */



import {ShareWithGroupViewImpl} from './ShareWithGroupViewImpl';
import {ListData} from '../../../../../data/ListData';
import { Meteor } from 'meteor/meteor';

describe('ShareWithGroupViewImpl', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ShareWithGroupViewImpl(); //NOSONAR
            }
        ).to.not.throw();
    });
});