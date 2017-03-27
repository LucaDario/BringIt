/**
 * Description: Class that tells what to inject when there is an @inject(InputItemInfoViewPresenter) annotation.
 * Created by lucadario on 27/03/2017.
 * Version 1.0.0 - Initial version
 */

import {container,inject,singleton} from 'dependency-injection-es6';
import {InputListInfoViewPresenter} from './InputListInfoViewPresenter';

container.bind(InputListInfoViewPresenter, InputListInfoViewPresenter);