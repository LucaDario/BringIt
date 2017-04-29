/**
 * Created by nicolo on 29/04/17.
 */

/**
 * Created by nicolo on 29/04/17.
 */

const EventEmitter = require('events');

import {container, singleton, inject} from 'dependency-injection-es6';

export class DeleteItem extends EventEmitter{

    /**
     * @constructor
     *
     */
    constructor() {
        super();
    }

    /**
     *@method
     *This method emit a event with 'deleteEvent'
     * @param listId {Object}: listId to pass through in emit method
     * @param itemId {string}: listName to pass through in emit method
     */
    emitDeleteItem(listId,itemId){
        this.emit('DeleteItem', listId,itemId);
    }

}

// Register the class as a singleton so that each instance that is injected is always the same
container.registerAsSingleton(DeleteItem);

