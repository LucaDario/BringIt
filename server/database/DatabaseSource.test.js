/**
 * Created by Stefano Lia on 04/05/2017
 * Version 1.0.0 - Initial version
 * Unit tests of DatabaseSource
 */

import {DatabaseSource} from './DatabaseSource';
import {container,inject} from 'dependency-injection-es6';
import {ListItem} from "../../data/ListItem";
import {ListData} from "../../data/ListData";

describe('DatabasaseSource', function () {

    it('Verify DatabaseSource returns the item info using an ID [TU50]', function () {
        Meteor.isTest = true;
        const db = container.resolve(DatabaseSource);

        const listData = new ListData();
        listData.setName('The best list ever made');
        const item1 = new ListItem();
        item1.setDescription("First item");
        listData.addItem(item1);
        db.saveList(listData);
        const dbItem = db.getItemWithId(listData.getId(), item1.getId());
        expect(dbItem).to.not.equal(undefined);
    });

    it('Verify DatabaseSource returns the list [TU51]', function () {

        Meteor.isTest = true;
        const db = container.resolve(DatabaseSource);
        const listData = new ListData();
        listData.setName('The best list ever made');
        db.saveList(listData);
        const list = db.getListWithId(listData.getId());
        expect(list).to.not.equal(undefined);
    });

    it('Verify DatabaseSource deletes the list [TU52]', function () {
        expect(
            () => {
                Meteor.isTest = true;
                const db = container.resolve(DatabaseSource);
                const listData = new ListData();
                listData.setName('The best list ever made');
                db.saveList(listData);
                db.removeList(listData.getId());
                db.getListWithId(listData.getId());
            }).to.throw();
    });


    it('Verify DatabaseSource saves correctly a list [TU53]', function () {

        Meteor.isTest = true;
        const db = container.resolve(DatabaseSource);
        const listData = new ListData();
        listData.setName('The best list ever made');
        db.saveList(listData);
        const list = db.getListWithId(listData.getId());
        expect(list.getId()._id).to.be.eq(listData.getId()._id);
    });
});