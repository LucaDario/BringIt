/**
 * Created by Stefano Lia on 01/05/2017
 * Version 1.0.0 - Initial version
 */

import {ChatSource} from './chat/ChatSource';
import {ListData} from '../data/ListData';
import {container} from 'dependency-injection-es6';
import { Meteor } from 'meteor/meteor';

describe('messageActionButton', function () {

    it('Verify the correct display of the buttons to an user without permissions [TU56]', function () {
        let chatSource = container.resolve(ChatSource);
        const listData = new ListData();
        listData.setName('Test');
        listData.setCreatorId('abcd');
        const json = {
            "bubbleType": 'Bringit',
            "listData": listData
        }

    });

    it('Verify the correct display of the buttons to an user with permissions [TU57]', function () {

    });

    it('Verify the correct display of the buttons to the creator of the list [TU58]', function () {

    });

});