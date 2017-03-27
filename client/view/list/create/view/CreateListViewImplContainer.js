/**
 * Description:
 * Created by Riccardo Montagnin on 24/03/2017.
 * Version 1.0.0 - Initial version
 */

import {container,inject,singleton} from 'dependency-injection-es6';
import {CreateListView} from '../CreateListView'
import {CreateListViewImpl} from './CreateListViewImpl';

container.bind(CreateListViewImpl, CreateListViewImpl);

