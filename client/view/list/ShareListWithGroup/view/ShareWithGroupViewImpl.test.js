/**
 * Created by liast on 25/04/2017
 * Version {VERSION} - {VERSION_NOTES}
 */

import {ShareWithGroupViewImpl} from './ShareWithGroupViewImpl';

describe('TextWidget', function () {
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