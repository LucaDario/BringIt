/**
 * A class Event, this exstends from EventEmitter (es6-event-emitter) and this represents the event
 * for emit the event when click button delete list
 * Created by Francesco Bazzerla on 20/04/17.
 * Version 1.0.1 - Completed
 */

const EventEmitter = require('events');

import {container, singleton, inject} from 'dependency-injection-es6';

export class DeleteListEventEmitter extends EventEmitter{

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
     * @param listId {Object} listId to pass pass through in emit method
     */
    emitDeleteEvent(listId){
        this.emit('deleteEvent', listId);
    }
}

// Register the class as a singleton so that each instance that is injected is always the same
container.registerAsSingleton(DeleteListEventEmitter);
