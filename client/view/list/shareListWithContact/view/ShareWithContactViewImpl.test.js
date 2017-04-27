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
});