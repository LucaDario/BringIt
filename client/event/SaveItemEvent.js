/**
 * Created by nicolo on 22/04/17.
 */

const EventEmitter = require('events');

import {container, singleton, inject} from 'dependency-injection-es6';

export class SaveItemEventEvent extends EventEmitter{

    /**
     * @constructor
     *
     */
    constructor() {
        super();

    }


    /**Public
     *This method emit a event with 'saveEvent'
     * @param list {ListData} listData to pass pass through in emit method
     */
    emitSaveEventItem(item){
        this.emit('saveEventItem', item);
    }



}

// Register the class as a singleton so that each instance that is injected is always the same
container.registerAsSingleton(SaveItemEventEvent);

