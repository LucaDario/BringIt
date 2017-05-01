/**
 * A class Event, this extends from EventEmitter (es6-event-emitter). It represents the share event which is emitted when
 * someone has chosen the group (or groups) which they want to send message to.
 * Created by Stefano Lia on 31/03/2017
 * Version 2.0.0 - completed
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
     * @param group {array}: contains the group which you want to share something to
     * @param message {JSON}: the message that you want to share
     * @param title {string}: the title of the popup
     */
    emitShareEvent(group, message, title){
        this.emit('shareEvent', group, message, title);
    }



}

// Register the class as a singleton so that each instance that is injected is always the same
container.registerAsSingleton(ShareEventEmitter);

