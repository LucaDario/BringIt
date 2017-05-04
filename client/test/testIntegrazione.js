/**
 * Created by Stefano Lia on 02/05/2017
 * Version 1.0.0 - Initial version
 */


import {ListData} from '../../data/ListData';
import {ListItem} from '../../data/ListItem';
import {InputItemInfoViewImpl} from '../view/item/inputitem/view/InputItemInfoViewImpl';
import {ShareWithGroupViewImpl} from '../view/list/ShareListWithGroup/view/ShareWithGroupViewImpl';
import {ShowPopupUseCase} from '../usecase/ShowPopupUseCase';
import {ChatSource} from '../chat/ChatSource';
import {container,inject} from 'dependency-injection-es6';

describe('Integration tests', function () {

    it('Verify the ShowPopupUseCase works properly with Chatsource [TI25]', function () {
        let show = container.resolve(ShowPopupUseCase);
    });
});