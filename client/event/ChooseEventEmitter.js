/**
 * Created by liast on 07/04/2017
 * Version {VERSION} - {VERSION_NOTES}
 */

const EventEmitter = require('events');

import {container, singleton, inject} from 'dependency-injection-es6';

export class ChooseEventEmitter extends EventEmitter{

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
    emitChooseEvent(choice,message){
        this.emit('chooseEvent', choice,message);
    }



}

// Register the class as a singleton so that each instance that is injected is always the same
container.registerAsSingleton(ChooseEventEmitter);

