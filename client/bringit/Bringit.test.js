/**
 * Created by Stefano Lia on 04/05/2017
 * Version 1.0.0 - Initial version
 * Unit test of Bringit bubble
 */

import {Bringit} from './Bringit';

describe('Bringit', function () {

    it('Check if it is possible to instantiate a Bringit bubble [TSFO18]', function () {
        expect(
            () => {
                let list = new ListData();
                let bubble = new Bringit(list.getName(),list.getId(),true);
            }).to.not.throw;
    });
})