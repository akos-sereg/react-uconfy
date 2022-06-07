export const FETCH_DEVICE = 'react-uconfy/DevicePage/FetchDeviceDetails'
export const DELETE_DEVICE = 'react-uconfy/DevicePage/DeleteDevice'

export function fetchDeviceDetails(deviceId: string) {
  return {
    type: FETCH_DEVICE,
    payload: deviceId
  }
}

export function deleteDevice(deviceId: string) {
  return {
    type: DELETE_DEVICE,
    payload: deviceId
  }
}
