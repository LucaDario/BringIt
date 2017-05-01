/**
 * Description: Base class which represents a generic exception.
 * Created by Riccardo Montagnin on 21/03/2017.
 * Version 1.2.0 - completed
 */

export class Exception {

    /**
     * Public constructor.
     * @param message {string}: Message to show.
     * @return {string}: Message to display.
     */
    constructor(message = ''){
        this._message = message;
        return this._message;
    }

    get message() {
        return this._message;
    }
}