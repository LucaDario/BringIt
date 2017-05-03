/**
 * Created by lucadario on 29/04/17.
 * Event for the completation of the list
 * version 3.0.0 - Completed
 */

const EventEmitter = require('events');

import {container, singleton, inject} from 'dependency-injection-es6';

export class CompleteListEventEmitter extends EventEmitter{

    /**
     * @constructor
     *
     */
    constructor() {
        super();
    }

    /**
     *@method
     *This method emit a event with 'completeEvent'
     * @param listId {Object}: listId to pass through in emit method
     * @param nameList {string}: listName to pass through in emit method
     */
    emitCompleteEvent(listId,nameList){
        this.emit('completeEvent', listId,nameList);
    }


}

// Register the class as a singleton so that each instance that is injected is always the same
container.registerAsSingleton(CompleteListEventEmitter);
