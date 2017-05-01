/**A class Event, this exstends from EventEmitter (es6-event-emitter) and this represents the event
 * for emit the event when click button save list
 * Created by lucadario on 29/03/17.
 * version 2.0.0 - Completed
 */

const EventEmitter = require('events');

import {container, singleton, inject} from 'dependency-injection-es6';

export class SaveListEvent extends EventEmitter{

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
    emitSaveEvent(list){
        this.emit('saveEvent', list);
    }



}

// Register the class as a singleton so that each instance that is injected is always the same
container.registerAsSingleton(SaveListEvent);

