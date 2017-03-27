/**
 * Description: Class that tells what to inject when there is an @inject(CreateListViewPresenter) annotation.
 * Created by Riccardo Montagnin on 23/03/2017.
 * Version 1.0.0 - Initial version
 */

import {container,inject,singleton} from 'dependency-injection-es6';
import {CreateListViewPresenter} from './CreateListViewPresenter';

container.bind(CreateListViewPresenter, CreateListViewPresenter);