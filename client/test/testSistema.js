/**
 * Created by Stefano Lia on 01/05/2017
 * Version 1.0.0 - Initial version
 * These are the system test used by the group to test the full application Bringit
 */

import {ListData} from '../../data/ListData';
import {InputItemInfoViewImpl} from '../view/item/inputitem/view/InputItemInfoViewImpl';
import {ShareWithGroupViewImpl} from '../view/list/ShareListWithGroup/view/ShareWithGroupViewImpl';
//import '../../../Monolith/lib/_monolith';
import {Bringit} from '../bringit/Bringit';


describe('System tests', function () {

    it('Check if it is possible to add an element in a Bringit bubble [TSFO18]', function () {


        // create the bubble Bringit
        let list = new ListData();
        let bubble = new Bringit(list.getName(),list.getId(),true);
        let input = new InputItemInfoViewImpl(list.getId());
        let item = input._presenter.createListItem(list.getName(), '',
            2, 'test', 'kg');
        // adding an element in the list
        bubble.addNewBringitItem(item);
    });
    it('Check the correct deleting of an item in the list and it interacts correctly with the database' +
        ' [TSFO19]', function () {

        let list = new ListData();
        let bubble = new Bringit(list.getName(),list.getId(),true);
        let input = new InputItemInfoViewImpl(list.getId());
        let item = input._presenter.createListItem(list.getName(), '',
            2, 'test', 'kg');
        bubble.addNewBringitItem(item);
        bubble.deleteItem(item.getId());
    });

    it('Check the correct checking of an item in the list [TSFO20]', function () {

        expect(
            () => {
                let list = new ListData();
                let bubble = new Bringit(list.getName(),list.getId(),true);
                let input = new InputItemInfoViewImpl(list.getId());
                let item = input._presenter.createListItem(list.getName(), '',
                    2, 'test', 'kg');
                bubble.addNewBringitItem(item);
                item.setStatus(true);
            }
        ).to.not.throw();
    });

    it("Check correct sharing of a Bringit bubble [TSFO25]", function () {
        const share = new ShareWithGroupViewImpl();
        const listData = new ListData();
        listData.setName('Test');
        listData.setCreatorId(this.userId);
        const json = {
            "bubbleType": 'Bringit',
            "listData": listData
        }
        share.onClickShareWithGroup('general',json);
    });
});