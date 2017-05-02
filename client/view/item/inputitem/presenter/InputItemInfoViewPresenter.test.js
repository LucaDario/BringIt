/**
 * Created by manu on 02/05/17.
 */
import {InputItemInfoViewPresenter} from "./InputItemInfoViewPresenter";

describe('InputItemInfoViewPresenter', function () {

    it('Check item name [TU41]', function () {
        throw new Error("NOT IMPLEMENTED");
    });

    it('Check image path [TU42]', function () {
        const presenter = new InputItemInfoViewPresenter();
        const item = presenter.createListItem("Test Product", "Test path", 10, "Long desc", "L");
        expect(item._imagePath).to.be.eq("Test path");
    });

    it('Check item description [TU43]', function () {
        const presenter = new InputItemInfoViewPresenter();
        const item = presenter.createListItem("Test Product", "Test path", 10, "Long desc", "L");
        expect(item._description).to.be.eq("Long desc");
    });

    it('Check item notes [TU44]', function () {
        throw new Error("NOT IMPLEMENTED");
    });

    it('Check item quantity [TU45]', function () {
        const presenter = new InputItemInfoViewPresenter();
        const item = presenter.createListItem("Test Product", "Test path", 10, "Long desc", "L");
        expect(item._quantity).to.be.eq(10);
    });

    it('Check item quantity default value [TU46]', function () {
        throw new Error("NOT IMPLEMENTED");
    });

    it('Check item measurement unit [TU47]', function () {
        const presenter = new InputItemInfoViewPresenter();
        const item = presenter.createListItem("Test Product", "Test path", 10, "Long desc", "L");
        expect(item._measurementUnit).to.be.eq("L");
    });

    it('Check item quantity default measurement unit [TU48]', function () {
        throw new Error("NOT IMPLEMENTED");
    });

    it('Check item remove [TU49]', function () {
        throw new Error("NOT IMPLEMENTED");
    });

});
