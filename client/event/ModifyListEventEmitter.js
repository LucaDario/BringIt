/**
 * Created by nicolo on 29/04/17.
 * An event for the modify of the item
 * version 2.0.0 - Completed
 */

const EventEmitter = require('events');

import {container, singleton, inject} from 'dependency-injection-es6';

export class ModifyListEvent extends EventEmitter{

    /**
     * Public constructor
     */
    constructor() {
        super();
    }

    /**
     * @method
     * This method emits the 'ModifyItem' event
     * @param listId {number}: listId to pass through in emit method
     * @param itemId {number}: ItemId to pass through in emit method
     */
    emitModifyitem(listId,itemId){
        this.emit('ModifyItem', listId, itemId);
    }

}

// Register the class as a singleton so that each instance that is injected is always the same
container.registerAsSingleton(ModifyListEvent);

