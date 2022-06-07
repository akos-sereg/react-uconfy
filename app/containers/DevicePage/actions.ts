export const FETCH_DEVICE = 'react-uconfy/DevicesPage/FetchDeviceDetails'

export function fetchDeviceDetails(deviceId: string) {
  return {
    type: FETCH_DEVICE,
    payload: deviceId
  }
}
