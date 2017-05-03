
/**
 * Created by nicolo on 29/04/17.
 * Event for delete the item
 * version 2.0.0 - Completed
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
     * @param listId {number}: listId to pass through in emit method
     * @param item {object}: item to pass through in emit method
     */
    emitDeleteItem(listId,item){
        this.emit('DeleteItem', listId,item);

    }

}

// Register the class as a singleton so that each instance that is injected is always the same
container.registerAsSingleton(DeleteItem);

