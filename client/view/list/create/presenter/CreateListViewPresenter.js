/**Description: This represents a presenter of CreateListViewImpl, this contains the parameters to
 * config for create a button in tab-flex-bar and create a list into database in server
 *
 * <code>
 *     //need import
 *     import {container, singleton, inject} from 'dependency-injection-es6';
 *
 *     // This will get your instance
 *  var createListViewPresenter = container.resolve(CreateListViewPresenter);
 * </code>
 * Created by lucadario on 29/03/17.
 */

import {container, singleton, inject} from 'dependency-injection-es6';
import {ChatSource} from '../../../../chat/ChatSource'


export class CreateListViewPresenter {

    /**
     * public @constructor
     *
     */
	constructor() {

        /**
         	 * @type{Object} this represents the list of the groups that have access a button
              */
		this._groups = ['channel', 'group', 'direct'];

        /**
         	 * @type{string} this represent a unique of the button
		 */
		this._id = 'create-list';

        /**
         -	 * @type{string} this represents a name of the icon, http://fontello.github.io/typicons.font/demo.html
         -     */
		this._icon = 'icon-th-list';

        /**
         -	 * @type{string} this represents a name of the template.html that should appears when click button
         -     */
		this._template = 'input';


        /**
         -	 * @type{int} this represent the position the button
         -     */
		this._order = 11;

        /**
		 * @type{ChatSource} chat for send message and show popUp
         */
		this._chatSourse = container.resolve(ChatSource);
	}

    /**Public
	 * This return a Json Config for the button in RocketChat.TabBAr
     * @returns {{JSON}}
     */

	renderView(){
		return {
			"groups":this._groups,
			"id":this._id,
			"i18nTitle": 'list',
			"icon":this._icon,
			"template":this._template,
			"order":this._order
		}
	}

    /**Public
	 * Subscribe method with name 'createList' with listData as a parameter
     * @param listData {ListData}
     */
	createList(listData){
		Meteor.subscribe('createList',listData, {
            onReady: () => {
                let roomName = $('.room-title').text();

				this._chatSourse.sendMessageToChatWithJson(roomName, createJsonList(listData));
            }
        });
	}


}
/**
 * Return json with a data in ListData
 * @param listData
 * @returns json {json}
 */
function createJsonList(listData) {
    return {
		listData,

        bubbleType:'Bringit'
    };

}
