/**
 * Created by Stefano Lia on 02/05/2017
 * Version 1.0.0 - Initial version
 * Integration test on the client side
 */


import {ListData} from '../../data/ListData';
import {ShareWithGroupViewImpl} from '../view/list/ShareListWithGroup/view/ShareWithGroupViewImpl';
import {CreateListViewImpl} from '../view/list/create/view/CreateListViewImpl';
import {DeleteListViewImpl} from '../view/list/delete/view/DeleteListViewImpl';
import {InputListInfoViewImpl} from '../view/list/input/view/InputListInfoViewImpl';
import {InputItemInfoViewImpl} from '../view/item/inputitem/view/InputItemInfoViewImpl';
import {ShareWithContactViewImpl} from '../view/list/shareListWithContact/view/ShareWithContactViewImpl';
import {ShowPopupUseCase} from '../usecase/ShowPopupUseCase';
import {ChatSource} from '../chat/ChatSource';
import {container,inject} from 'dependency-injection-es6';
import {Meteor} from 'meteor/meteor';

describe('Integration tests', function () {

    it('Verify the ShareWithGroupPresenter works properly with ChatSource [TI23]', function () {

        const share = new ShareWithGroupViewImpl();
        const chat = container.resolve(ChatSource);

        //create a Bringit message
        const listData = new ListData();
        listData.setName('Test');
        listData.setCreatorId(this.userId);
        const json = {
            "bubbleType": 'Bringit',
            "listData": listData
        }
        //create an array which contains the group (or groups) you want to send a message
        const group = ['general'];

        //create a spy element which simulates the function you want to verify
        let spy = sinon.spy(chat, "sendMessageToChatWithJson");

        //specify the arguments of the function you want to simulate
        spy.withArgs(group[0],json);
        share._presenter.openShareWithGroupView(group, json);
        assert(spy.withArgs(group[0],json).calledOnce);
        //clear the spy element
        spy.restore();
    });

    it('Verify ShareWithGroupViewImpl works properly with ShareWithGroupViewPresenter ' +
        'TI[32]', function () {
        const group = new ShareWithGroupViewImpl();
        const spy = sinon.spy(group._presenter, "openShareWithGroupView");

        //create a Bringit message
        const listData = new ListData();
        listData.setName('Test');
        listData.setCreatorId(this.userId);
        const json = {
            "bubbleType": 'Bringit',
            "listData": listData
        }
        spy.withArgs('general',json);
        group.onClickShareWithGroup('general',json);
        assert(spy.withArgs('general',json).calledOnce);
        //clear the spy element
        spy.restore();
    });

    it('Verify ShareWithContactViewImpl works properly with ' +
        'ShareWithContactViewPresenter TI[33]', function () {
        const contact = new ShareWithContactViewImpl();

        //create a Bringit message
        const listData = new ListData();
        listData.setName('Test');
        listData.setCreatorId(this.userId);
        const json = {
            "bubbleType": 'Bringit',
            "listData": listData
        }
        //create a spy element which simulates the function you want to verify
        const spy = sinon.spy(contact._presenter, "onClickShareWithContact");

        //specify the arguments of the function you want to simulate
        spy.withArgs('general',json);
        contact.onClickShareWithContact('general',json);
        assert(spy.withArgs('general',json).calledOnce);
        //clear the spy element
        spy.restore();
    });

    it('Verify ShareWithContactViewPresenter works properly with ChatSource TI[??]', function () {

        const contact = new ShareWithContactViewImpl();
        const chat = container.resolve(ChatSource);

        //create a Bringit message
        const listData = new ListData();
        listData.setName('Test');
        listData.setCreatorId(this.userId);
        const json = {
            "bubbleType": 'Bringit',
            "listData": listData
        }
        //create an array which contains the group (or groups) you want to send a message
        const person = ['general'];


        //create a spy element which simulates the function you want to verify
        const spy = sinon.spy(chat, "sendMessageToUser");

        //specify the arguments of the function you want to simulate
        spy.withArgs(person,json);
        contact._presenter.onClickShareWithContact(person, json);
        assert(spy.withArgs(person,json).calledOnce);
        //clear the spy element
        spy.restore();

    });

    it('Verify ShareWithContactViewPresenter works properly with ShowPopupUseCase TI[??]', function () {
        const contact = new ShareWithContactViewImpl();
        const show = container.resolve(ShowPopupUseCase);

        //create a Bringit message
        const listData = new ListData();
        listData.setName('Test');
        listData.setCreatorId(this.userId);
        const json = {
            "bubbleType": 'Bringit',
            "listData": listData
        }
        //create an array which contains the group (or groups) you want to send a message
        const person = ['general'];

        //create a spy element which simulates the function you want to verify
        const spy = sinon.spy(show, "showPopupContactPermission");

        //specify the arguments of the function you want to simulate
        spy.withArgs(person,json);
        contact._presenter.onClickShareWithContact(person, json);
        assert(spy.called);

        //clear the spy element
        spy.restore();
    });

    it('Verify CreateListViewImpl works properly with CreateListViewPresenter TI[??]', function () {

        const create = new CreateListViewImpl();

        //create a spy element which simulates the function you want to verify
        const spy = sinon.spy(create._presenter, "renderView");

        create.renderView();
        assert(spy.called);

        //clear the spy element
        spy.restore();
    });

    it('Verify DeleteListViewImpl works properly with DeleteListViewPresenter TI[??]', function () {

        const del = new DeleteListViewImpl();

        //create a Bringit list
        const listData = new ListData();
        listData.setName('Test');
        listData.setCreatorId(this.userId);

        //create a spy element which simulates the function you want to verify
        const spy = sinon.spy(del._presenter, "openDeleteListView");

        //specify the arguments of the function you want to simulate
        spy.withArgs(listData.getId(), listData.getName());

        del.openDeleteListView(listData.getId(), listData.getName());
        assert(spy.called);

        //clear the spy element
        spy.restore();
    });

    it('Verify InputListInfoViewImpl works properly with ' +
        'InputListInfoViewPresenter TI[??]', function () {
        //true if the test requires a stub
        Meteor.isTest = true;

        const input = new InputListInfoViewImpl();

        //create a spy element which simulates the function you want to verify
        const spy = sinon.spy(input._presenter, "createListData");

        //specify the arguments of the function you want to simulate
        spy.withArgs('Test', '../test.jpg');

        input.onSaveClicked('Test', '../test.jpg');
        assert(spy.called);

        //clear the spy element
        spy.restore();
    });

    it('Verify InputItemInfoViewImpl works properly with ' +
        'InputItemInfoViewPresenter TI[??]', function () {

        const input = new InputItemInfoViewImpl();

        //create a spy element which simulates the function you want to verify
        const spy = sinon.spy(input._presenter, "createListItem");

        //specify the arguments of the function you want to simulate
        spy.withArgs('Test',4,'descrizione','kg','../test.jpg');

        input.onSaveClicked('Test',4,'descrizione','kg','../test.jpg');
        assert(spy.called);

        //clear the spy element
        spy.restore();
    });
});