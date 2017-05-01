/**
 * Description: Class which represents an exception that is thrown when an abstract method is not implemented.
 * Created by Riccardo Montagnin on 27/03/2017.
 * Version 1.2.0 - completed
 */

import {Exception} from "./Exception";

export class ImplementMethodException extends Exception {

    /**
     * Public constructor.
     * @param method {String}: Name of the method which should be implemented.
     * @return Returns a new {Exception}.
     */
    constructor(method){
        return super("Method " + method + " must be implemented");
    }

}