/**
 * Created by Stefano Lia on 01/05/2017
 * Version 1.0.0 - Initial version
 * Unit tests of DeleteListViewImpl
 */

import {DeleteListViewImpl} from './DeleteListViewImpl';

describe('DeleteListViewImpl', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new DeleteListViewImpl(); //NOSONAR
            }
        ).to.not.throw();
    });
});