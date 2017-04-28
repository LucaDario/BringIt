/**
 * Created by Stefano Lia on 25/04/2017
 * Version {VERSION} - {VERSION_NOTES}
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