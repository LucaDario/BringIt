/**
 * A class Event, this extends from EventEmitter (es6-event-emitter). It represents the share event which is emitted when
 * someone has chosen the group (or groups) which they want to send message to.
 * Created by Stefano Lia on 31/03/2017
 * Version 1.0.0 - Initial version
 * Version 1.0.1 - added a method for the emitting
 */

import {container, singleton, inject} from 'dependency-injection-es6';

const EventEmitter = require('events');

export class ShareEventEmitter extends EventEmitter{

    /**
     * Public constructor
     */
    constructor() {
        super();
        //this._emitter = new ShareWithGroupViewImpl();

    }

    /**
     * @method
     * this method emits a share event.
     * @param group {array} contains the group which you want to share something to
     * @param message {JSON} the message that you want to share
     */
    emitShareEvent(group, message){
        this.emit('shareEvent', group, message);
    }



}

// Register the class as a singleton so that each instance that is injected is always the same
container.registerAsSingleton(ShareEventEmitter);

