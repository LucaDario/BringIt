/**Description:
 * Created by lucadario on 27/03/17.
 * Version 1.0.0
 */

import {container,inject,singleton} from 'dependency-injection-es6';
import {InputListView} from '../InputListInfoView'
import {InputListInfoViewImpl} from './InputListInfoViewImpl';

container.bind(InputListInfoViewImpl, InputListInfoViewImpl);