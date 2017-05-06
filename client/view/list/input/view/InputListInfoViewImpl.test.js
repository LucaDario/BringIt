/**
 * Created by Stefano Lia on 06/05/2017
 * Version 1.0.0 - Initial version
 * Unit tests of InputListInfoViewImpl
 */


import {InputListInfoViewImpl} from './InputListInfoViewImpl';

describe('InputListInfoViewImpl', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new InputListInfoViewImpl(); //NOSONAR
            }
        ).to.not.throw();
    });
});