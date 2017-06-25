/**
 * Created by Manuel Turetta on 02/05/17
 * Version 1.0.2 - Completed
 * Unit tests of InputItemInfoViewPresenter
 */
import {InputItemInfoViewPresenter} from "./InputItemInfoViewPresenter";
import { sinon } from 'meteor/practicalmeteor:sinon';

describe('InputItemInfoViewPresenter', function () {

    it('Check image path [TU43]', function () {
        const presenter = new InputItemInfoViewPresenter();
        const item = presenter.createListItem("Test Product", "Test path", 10, "Long desc", "L");
        expect(item._imagePath).to.be.eq("Test path");
    });

    it('Check item description [TU44]', function () {
        const presenter = new InputItemInfoViewPresenter();
        const item = presenter.createListItem("Test Product", "Test path", 10, "Long desc", "L");
        expect(item._description).to.be.eq("Long desc");
    });

    /*it('Check item notes [TU45]', function () { //NOSONAR
        throw new Error("NOT IMPLEMENTED"); //NOSONAR
    });*/ //NOSONAR

    it('Check item quantity [TU46]', function () {
        const presenter = new InputItemInfoViewPresenter();
        const item = presenter.createListItem("Test Product", "Test path", 10, "Long desc", "L");
        expect(item._quantity).to.be.eq(10);
    });

    it('Check item quantity default value [TU47]', function () {
        const presenter = new InputItemInfoViewPresenter();
        const item = presenter.createListItem("Test Product", "Test path", 10, "Long desc", "L");
        //quantity not inserted
        item.setQuantity();
        expect(item._quantity).to.be.eq(1);
    });

    it('Check item measurement unit [TU48]', function () {
        const presenter = new InputItemInfoViewPresenter();
        const item = presenter.createListItem("Test Product", "Test path", 10, "Long desc", "L");
        expect(item._measurementUnit).to.be.eq("L");
    });

    it('Check item quantity default measurement unit [TU49]', function () {
        const presenter = new InputItemInfoViewPresenter();
        const item = presenter.createListItem("Test Product", "Test path", 10, "Long desc");
        expect(item._measurementUnit).to.be.eq("");
    });

    /*it('Check item remove [TU49]', function () { //NOSONAR
        throw new Error("NOT IMPLEMENTED"); //NOSONAR
    });*/ //NOSONAR

});
