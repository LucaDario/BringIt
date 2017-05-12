/**
 * Description: Class which represents the use case that helps forwarding a list to a user.
 * To obtain an instance of this class be sure to include the following code inside the class that uses it:
 * <code>
 *  // Needed import
 *  import {container} from 'dependency-injection-es6';
 *
 *  // This will get your instance
 *  var forwardListUseCase = container.resolve(ForwardListUseCase);
 * <code/>
 * Created by Riccardo Montagnin on 29/03/2017.
 * Version 1.2.0 - Initial version
 */

import {container} from 'dependency-injection-es6';
import {ChatSource} from "../chat/ChatSource";

export class ForwardListUseCase{

    /**
     * Public constructor.
     */
    constructor(){
        this._chatSource = container.resolve(ChatSource);
    }

    /**
     * Forwards a list to a specific chat transforming it to a simple message without any option of interation.
     * @param listId {Object}: Id of the list to share.
     * @param chatId {string}: Id of the chat to which forward the list.
     */
    forwardList(listId, chatId){
        // TODO: Stub //NOSONAR
    }

}

// Be sure that each instance of this class that will be injected is always the same
container.registerAsSingleton(ForwardListUseCase);