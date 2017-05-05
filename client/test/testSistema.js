/**
 * Created by Stefano Lia on 01/05/2017
 * Version 1.0.0 - Initial version
 * These are the system tests used by the group to test the full application Bringit
 */

import {ListData} from '../../data/ListData';
import {InputItemInfoViewImpl} from '../view/item/inputitem/view/InputItemInfoViewImpl';
import {ShareWithGroupViewImpl} from '../view/list/ShareListWithGroup/view/ShareWithGroupViewImpl';
import {ShareWithContactViewImpl} from '../view/list/shareListWithContact/view/ShareWithContactViewImpl';
import {ChatSource} from '../chat/ChatSource';
import {Bringit} from '../bringit/Bringit';
import {container,inject} from 'dependency-injection-es6';


describe('System tests', function () {

    it('Check if it is possible to instantiate a Bringit bubble [TSFO18]', function () {
        expect(
            () => {
                let list = new ListData();
                new Bringit(list.getName(),list.getId(),true);
            }).to.not.throw;
    });

    it('Check if it is possible to add an element in a Bringit bubble [TSFO19]', function () {


        // create the bubble Bringit
        let list = new ListData();
        let bubble = new Bringit(list.getName(),list.getId(),true);
        let input = new InputItemInfoViewImpl(list.getId());
        let item = input._presenter.createListItem(list.getName(), '',
            2, 'test', 'kg');
        // adding an element in the list
        bubble.addNewBringitItem(item);
        bubble.addItemFromDb(item);
        console.log(bubble.getLayout().getItems());
        expect(bubble.getLayout().getItems().length).to.be.eq(3);
    });

/*    it('Check the correct deleting of an item in the list and it interacts correctly with the database' +
        ' [TSFO20]', function () {

        let list = new ListData();
        let bubble = new Bringit(list.getName(),list.getId(),true);
        let input = new InputItemInfoViewImpl(list.getId());
        let item = input._presenter.createListItem(list.getName(), '',
            2, 'test', 'kg');
        bubble.addNewBringitItem(item);
        bubble.addItemFromDb(item);
        bubble.deleteItem(item.getId());
        bubble.updateItem(item);
        console.log(bubble.getLayout().getItems());
        expect(bubble.getLayout().getItems().length).to.be.eq(2);
    });
*/
    it('Check the correct checking of an item in the list [TSFO21]', function () {
        let list = new ListData();
        let bubble = new Bringit(list.getName(),list.getId(),true);
        let input = new InputItemInfoViewImpl(list.getId());
        let item = input._presenter.createListItem(list.getName(), '',
            2, 'test', 'kg');
        bubble.addNewBringitItem(item);
        bubble.addItemFromDb(item);
        console.log(bubble.getLayout().getItems());
        bubble.getLayout().getItems()[2]._items[0].setChecked(true);
        expect(bubble.getLayout().getItems()[2]._items[0].isChecked()).to.be.eq(true);
    });

    it("Check correct sharing to a person of a Bringit bubble [TSFO24]", function () {
        const share = new ShareWithContactViewImpl();
        const chat = container.resolve(ChatSource);

        //create a spy element which simulates the function you want to verify
        let spy = sinon.spy(chat, "sendMessageToUser");

        // creation of a Bringit message
        const listData = new ListData();
        listData.setName('Test');
        listData.setCreatorId(this.userId);
        const json = {
            "bubbleType": 'Bringit',
            "listData": listData
        }

        //specify the arguments of the function you want to simulate
        spy.withArgs('rocket.cat',json);

        share.onClickShareWithContact('rocket.cat', json);
        assert(spy.withArgs('rocket.cat',json).calledOnce);
        spy.restore();
    });

    it("Check correct sharing in a group of a Bringit bubble [TSFO25]", function () {
        const share = new ShareWithGroupViewImpl();
        const chat = container.resolve(ChatSource);

        //create a spy element which simulates the function you want to verify
        let spy = sinon.spy(chat, "sendMessageToChatWithJson");

        // creation of a Bringit message
        const listData = new ListData();
        listData.setName('Test');
        listData.setCreatorId(this.userId);
        const json = {
            "bubbleType": 'Bringit',
            "listData": listData
        }

        //specify the arguments of the function you want to simulate
        spy.withArgs('general',json);

        share.onClickShareWithGroup('general', json);
        assert(spy.called);
        spy.restore();
    });
});