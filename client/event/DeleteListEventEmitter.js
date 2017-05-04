/**
 * A class Event, this exstends from EventEmitter (es6-event-emitter) and this represents the event
 * for emit the event when click button delete list
 * Created by Francesco Bazzerla on 20/04/17.
 * Version 2.0.0 - Completed
 */

const EventEmitter = require('events');

import {container, singleton, inject} from 'dependency-injection-es6';

export class DeleteListEventEmitter extends EventEmitter{

    /**
     * Public constructor
     */
    constructor() {
        super();
    }

    /**
     * @method
     * This method emit a event with 'deleteEvent'
     * @param listId {Object}: listId to pass through in emit method
     * @param nameList {string}: listName to pass through in emit method
     */
    emitDeleteEvent(listId,nameList){
        this.emit('deleteEvent', listId,nameList);
    }

    /**
     * @method
     * This method emits the 'deleteThisEvent'
     * @param listId {Object}: listId to pass through in emit method
     * @param nameList {string}: listName to pass through in emit method
     */
    emitDeleteThis(listId,nameList){
        this.emit('deleteThisEvent', listId,nameList);
    }
}

// Register the class as a singleton so that each instance that is injected is always the same
container.registerAsSingleton(DeleteListEventEmitter);

