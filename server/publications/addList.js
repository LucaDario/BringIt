/**The publish "createList" with one parameter, the list data, you want to ad in Database
 * @param listData {ListData}
 * Created by lucadario on 29/03/17.
 */



import {container,inject} from 'dependency-injection-es6';
import {ManageListsUseCase} from '../usecase/ManageListsUseCase';
import {ListData} from '../../data/ListData';



Meteor.publish('createList',function (listData) {

    let manageList = container.resolve(ManageListsUseCase);
    console.log(listData);


});