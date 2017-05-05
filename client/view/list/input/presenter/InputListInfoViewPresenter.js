/**
 * The Presenter of InputListInfoViewImpl and allow create a List information with information obtained
 * from the view
 * <code>
 *     //need import
 *
 *     import {container, singleton, inject} from 'dependency-injection-es6';

 *     import {ListData} from '../../../../../data/ListData';
 *
 *     // This will get your instance
 *  var inputListInfoViewPresenter = container.resolve(InputListInfoViewPresenter);
 * </code>
 * Created by lucadario on 28/03/17.
 *  * version 3.0.0 - bug fixes, on hold for other component
 */


import {container, singleton, inject} from 'dependency-injection-es6';
import {ListData} from '../../../../../data/ListData';

export class InputListInfoViewPresenter{



    /**
     * public constructor
     *
     */
    constructor() {

    }

    /**
     * This method create ListData and contains a name of the list, image and creatorId
     * @param name {string}
     * @param image {string} the path of the image
     * @returns {ListData}
     */
    createListData(name, image){
        let listData = new ListData();
        listData.setName(name);
        listData.setImagePath(image);
        if(Meteor.isTest){
            listData.setCreatorId('rocket.cat');
        }
        else {
            listData.setCreatorId(Meteor.userId());
        }
        return listData;

    }
}

