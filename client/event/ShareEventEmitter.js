/**
 * Created by liast on 31/03/2017
 * Version {VERSION} - {VERSION_NOTES}
 */
/**A class Event, this exstends from EventEmitter (es6-event-emitter) and this represents the event
 * for emit the event when click button save list
 * Created by lucadario on 29/03/17.
 */

const EventEmitter = require('events');

import {container, singleton, inject} from 'dependency-injection-es6';

export class ShareEventEmitter extends EventEmitter{

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
    emitShareEvent(listName,groupId){
        this.emit('shareEvent', listName, groupId);
    }



}

// Register the class as a singleton so that each instance that is injected is always the same
container.registerAsSingleton(ShareEventEmitter);

