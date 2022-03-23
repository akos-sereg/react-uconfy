import { combineEpics } from 'redux-observable';

import * as app from '../features/app/epics';
import * as articles from '../features/articles/epics';
import * as devices from '../features/devices/epics';

export default combineEpics(
    ...Object.values(app),
    ...Object.values(articles),
    ...Object.values(devices)
);
