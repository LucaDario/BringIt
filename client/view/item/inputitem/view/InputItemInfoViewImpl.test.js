/**
 * Created by manu on 02/05/17.
 */
import {InputItemInfoViewImpl} from "./InputItemInfoViewImpl";
import { sinon } from 'meteor/practicalmeteor:sinon';

describe('InputItemInfoViewImpl', function () {

    it('Check that is showing error popup when is inserted an element without the name [TU41]', function () {
        const view = new InputItemInfoViewImpl();
        view.showErrorPopup = sinon.spy();
        view.onSaveClicked("TEST", 10, "DESC", "M", "");
        expect(view.showErrorPopup.called).to.not.be.ok;
        view.onSaveClicked("", 10, "DESC", "M", "");
        expect(view.showErrorPopup.called).to.be.ok;
    });

});
