import { Device } from 'MyModels';
import { createAsyncAction } from 'typesafe-actions';

export const loadDevicesAsync = createAsyncAction(
  'LOAD_DEVICES_REQUEST',
  'LOAD_DEVICES_SUCCESS',
  'LOAD_DEVICES_FAILURE'
)<undefined, Device[], string>();
