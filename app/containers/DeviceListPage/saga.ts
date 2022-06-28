import { put, takeEvery } from 'redux-saga/effects';
import {
  devicesReceived, FETCH_DEVICES, fetechDevices
} from './actions'
import UconfyDevicesApi from '../../services/UconfyDevicesApi';
import * as toastr from 'toastr'
import {getDeviceListUri, getHashPage, getMarketingPage, getRootPage} from "../../services/UrlService";
import {setNavigation} from "../../components/Navigation/actions";

export function *fetchDevices(action: any): any {
  const result = yield UconfyDevicesApi.instance.getDevices()
  if (!result.success) {
    toastr['warning']('Server error, please try again')
    return
  }

  yield put(devicesReceived(result.responseData))

  const requestedHash = localStorage.getItem('requested_hash')
  if (requestedHash) {
    localStorage.removeItem('requested_hash')

    // navigate to /#/device/* subpage, if that was requested
    if (requestedHash.startsWith('#/device/')) {
      const currentDevice = result.responseData.devices.find((device: any) => requestedHash.indexOf(device.deviceID) !== -1)
      yield put(setNavigation([
        { name: 'uConfy', uri: getMarketingPage() },
        { name: 'Devices', uri: getDeviceListUri() },
        { name: currentDevice.name },
      ]))
    }

    document.location.href = getHashPage(requestedHash)
  }
}

export default function* rootSaga() {
  yield [
    takeEvery(FETCH_DEVICES, fetchDevices)
  ];
}
