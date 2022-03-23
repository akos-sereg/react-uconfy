import { RootEpic } from 'MyTypes';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import {
  loadDevicesAsync,
} from './actions';

export const loadDevicesEpic: RootEpic = (action$, state$, { api }) => {
    console.log('loadDevicesEpic called');
    const retval = action$.pipe(
           filter(isActionOf(loadDevicesAsync.request)),
           switchMap(() =>
             from(api.devices.loadDevices()).pipe(
               map(loadDevicesAsync.success),
               catchError(message => of(loadDevicesAsync.failure(message)))
             )
           )
         );

         console.log('returning', retval);
    return retval;
}

