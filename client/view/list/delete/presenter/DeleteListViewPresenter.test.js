/**
 * Created by Stefano Lia on 01/05/2017
 * Version 1.0.0 - Initial version
 */

import {DeleteListViewImpl} from '../view/DeleteListViewImpl';
import {ListData} from "../../../../../data/ListData";

describe('DeleteListViewPresenter', function () {

    it('Check that openDeleteListView works properly [TU57]', function () {
        expect(
            () => {
                const del = new DeleteListViewImpl();
                const listData = new ListData();
                del.openDeleteListView(listData.getId(), listData.getName());
            }
        ).to.not.throw();
    });
});