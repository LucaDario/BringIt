/**
 * Created by Manuel Turetta on 02/05/17
 * version 1.1.0 - Tests completed
 * Unit tests for CreateListViewPresenter
 */

import {CreateListViewPresenter} from "./CreateListViewPresenter";
import {ListData} from "../../../../../data/ListData";

describe('CreateListViewPresenter', function () {

    it('Check list name insertion [TU38]', function () {
        const presenter = new CreateListViewPresenter();
        const listData = new ListData();
        listData.setName("TEST");
        sinon.spy(presenter._chatSourse, "sendMessageToChatWithJson");
        presenter.createList(listData);
        expect(presenter._chatSourse.sendMessageToChatWithJson.called).to.be.ok;
        expect(presenter._chatSourse.sendMessageToChatWithJson.getCall(0).args[1].listData._name).to.be.eq("TEST");
        presenter._chatSourse.sendMessageToChatWithJson.restore();
    });

    it('Check that the list name have a default value [TU39]', function () {
        const presenter = new CreateListViewPresenter();
        const listData = new ListData();
        sinon.spy(presenter._chatSourse, "sendMessageToChatWithJson");
        presenter.createList(listData);
        listData.setName('');
        expect(presenter._chatSourse.sendMessageToChatWithJson.called).to.be.ok;
        expect(presenter._chatSourse.sendMessageToChatWithJson.getCall(0).args[1].listData._name).to.be.eq("List");
        presenter._chatSourse.sendMessageToChatWithJson.restore();
    });

    it('Check that the list image is set correctly [TU40]', function () {
        const presenter = new CreateListViewPresenter();
        const listData = new ListData();
        listData.setImagePath("TEST");
        sinon.spy(presenter._chatSourse, "sendMessageToChatWithJson");
        presenter.createList(listData);
        expect(presenter._chatSourse.sendMessageToChatWithJson.called).to.be.ok;
        expect(presenter._chatSourse.sendMessageToChatWithJson.getCall(0).args[1].listData._imagePath).to.be.eq("TEST");
        presenter._chatSourse.sendMessageToChatWithJson.restore();
    });


});
