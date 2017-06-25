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


describe('System tests', function () { //NOSONAR

    function checkPermission(listData) {
        let permission = false;
        if (Meteor.isTest) {
            for (let i = 0; i < listData._users.length; i++) {
                if (listData._users[i] === 'testID') {
                    permission = true;
                }
            }
            return permission || (listData._creatorId === 'testCreator');
        }
    }

    it('Check if it is possible to instantiate a Bringit bubble [TSFO18]', function () {
        expect(
            () => {
                const list = new ListData();
                new Bringit(list.getName(),list.getId(),true); //NOSONAR
            }).to.not.throw;
    });

    it('Check if it is possible to add an element in a Bringit bubble [TSFO19]', function () {


        // create the bubble Bringit
        const list = new ListData();
        const bubble = new Bringit(list.getName(),list.getId(),true);
        const input = new InputItemInfoViewImpl(list.getId());
        const item = input._presenter.createListItem(list.getName(), '',
            2, 'test', 'kg');
        // adding an element in the list
        bubble.addNewBringitItem(item);
        bubble.addItemFromDb(item);
        expect(bubble.getLayout().getItems().length).to.be.eq(3);
    });

/*    it('Check the correct deleting of an item in the list and it interacts correctly with the database' + //NOSONAR
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
        expect(bubble.getLayout().getItems().length).to.be.eq(2);
    });
*/
    it('Check the correct checking of an item in the list [TSFO21]', function () {
        const list = new ListData();
        const bubble = new Bringit(list.getName(),list.getId(),true);
        const input = new InputItemInfoViewImpl(list.getId());
        const item = input._presenter.createListItem(list.getName(), '',
            2, 'test', 'kg');
        bubble.addNewBringitItem(item);
        bubble.addItemFromDb(item);
        bubble.getLayout().getItems()[2]._items[0].setChecked(true);
        expect(bubble.getLayout().getItems()[2]._items[0].isChecked()).to.be.eq(true);
    });

    it("Check correct sharing to a person of a Bringit bubble [TSFO24]", function () {
        const share = new ShareWithContactViewImpl();
        const chat = container.resolve(ChatSource);

        //create a spy element which simulates the function you want to verify
        const spy = sinon.spy(chat, "sendMessageToUser");

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
        const spy = sinon.spy(chat, "sendMessageToChatWithJson");

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

    it("Check if only the users in the _user field can add an element in the list" +
        " [TSFO26]", function () {
        Meteor.isTest = true;
        // creation of a Bringit message
        const listData = new ListData();
        listData.setName('Test');
        listData.addUser('testID');
        const json = {
            "bubbleType": 'Bringit',
            "listData": listData
        }
        const bubble = new Bringit(listData.getName(),listData.getId(),checkPermission(json.listData));
        expect(bubble._addItemButton).to.not.equal(undefined);
    });

    it("Check if users aren't in the _users list can't add elements in the list" +
        " [TSFO27]", function () {

        Meteor.isTest = true;
        // creation of a Bringit message
        const listData = new ListData();
        listData.setName('Test');
        const json = {
            "bubbleType": 'Bringit',
            "listData": listData
        }

        const bubble = new Bringit(listData.getName(),listData.getId(),checkPermission(json.listData));
        expect(bubble._addItemButton).to.be.eq(undefined);
    });

    it("Check the creator has the right permissions" +
        " [TSFO28]", function () {

        Meteor.isTest = true;
        // creation of a Bringit message
        const listData = new ListData();
        listData.setName('Test');
        listData.setCreatorId('testCreator');
        const json = {
            "bubbleType": 'Bringit',
            "listData": listData
        }
        const bubble = new Bringit(listData.getName(),listData.getId(),checkPermission(json.listData));
        expect(bubble._addItemButton).to.not.equal(undefined);
    });
});