/**
 * Created by lucadario on 29/03/17.
 */

const EventEmitter = require('events');

import {container, singleton, inject} from 'dependency-injection-es6';

export class SaveListEvent extends EventEmitter{

    constructor() {
        super();
    }

    callBack(list){
        this.emit('saveEvent', list);
    }


}

// Register the class as a singleton so that each instance that is injected is always the same
container.registerAsSingleton(SaveListEvent);

