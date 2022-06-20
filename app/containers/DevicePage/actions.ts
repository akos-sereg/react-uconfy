export const FETCH_DEVICE = 'react-uconfy/DevicePage/FetchDeviceDetails'
export const FETCH_DEVICE_RESPONSE_RECEIVED = 'react-uconfy/DevicePage/FetchDeviceDetailsResponseReceived'
export const DELETE_DEVICE = 'react-uconfy/DevicePage/DeleteDevice'

export function fetchDeviceDetails(deviceId: string) {
  return {
    type: FETCH_DEVICE,
    payload: deviceId
  }
}

export function fetchDeviceDetailsReceived(deviceId: string, deviceDetails: any) {
  return {
    type: FETCH_DEVICE_RESPONSE_RECEIVED,
    payload: {
      deviceId,
      deviceDetails
    }
  }
}

export function deleteDevice(deviceId: string) {
  return {
    type: DELETE_DEVICE,
    payload: deviceId
  }
}
