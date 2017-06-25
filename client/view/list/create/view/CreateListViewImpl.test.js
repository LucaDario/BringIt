/**
 * Created by Manuel Turetta on 02/05/17
 * version 1.0.0 - Test completed
 * Unit tests for CreateListViewImpl
 */

import {CreateListViewImpl} from './CreateListViewImpl';

describe('CreateListViewImpl', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new CreateListViewImpl(); //NOSONAR
            }
        ).to.not.throw();
    });
});