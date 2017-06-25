/**
 * Created by Manuel Turetta on 02/05/17
 * Version 1.0.2 - Completed
 * Unit tests of InputItemInfoViewImpl
 */
import {InputItemInfoViewImpl} from "./InputItemInfoViewImpl";
import { sinon } from 'meteor/practicalmeteor:sinon';

describe('InputItemInfoViewImpl', function () {

    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new InputItemInfoViewImpl(); //NOSONAR
            }
        ).to.not.throw();
    });

    it('Check that is showing error popup when is inserted an element without the name [TU42]', function () {
        const view = new InputItemInfoViewImpl();
        view.showErrorPopup = sinon.spy();
        view.onSaveClicked("TEST", 10, "DESC", "M", "");
        expect(view.showErrorPopup.called).to.not.be.ok;
        view.onSaveClicked("", 10, "DESC", "M", "");
        expect(view.showErrorPopup.called).to.be.ok;
    });

});
