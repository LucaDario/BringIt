/**
 * Created by Stefano Lia on 06/05/2017
 * Version 1.0.0 - Initial version
 */

import {ListData} from './ListData';

describe('ListData', function () {

    it('Check the name of the list is set correctly [TU39]', function () {
        const list = new ListData();
        list.setName('test');
        const bubble = new Bringit(list.getName(),list.getId(),true);
        expect(bubble._textNameList.getName()).to.be.eq('test');
    });

    it('Check when you do not insert the name of the list it will be set with default value [TU40]', function () {
        const list = new ListData();
        list.setName('');
        const bubble = new Bringit(list.getName(),list.getId(),true);
        expect(bubble._textNameList.getName()).to.be.eq('List');
    });


});