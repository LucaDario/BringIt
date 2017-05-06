/**
 * Created by lucadario on 29/03/17.
 */

import {container,inject,singleton} from 'dependency-injection-es6';
import {CreateListViewPresenter} from './CreateListViewPresenter';

container.bind(CreateListViewPresenter, CreateListViewPresenter);