/**
 * Created by nicolo on 22/04/17.
 * The event for save the item
 * version 2.0.0 - Completed
 */

const EventEmitter = require('events');

import {container, singleton, inject} from 'dependency-injection-es6';

export class SaveItemEvent extends EventEmitter{

    /**
     * @constructor
     *
     */
    constructor() {
        super();

    }


    /**Public
     *This method emit a event with 'saveEventItem'
     * @param item {Object}: ListItem to  pass through in emit method
     * @param listId {number}: Id of the list to pass through in emit method
     */
    emitSaveEventItem(item,listId){
        this.emit('saveEventItem', item,listId);
    }



}

// Register the class as a singleton so that each instance that is injected is always the same
container.registerAsSingleton(SaveItemEvent);

