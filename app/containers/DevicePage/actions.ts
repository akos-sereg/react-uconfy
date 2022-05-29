export const FETCH_DEVICES_RESPONSE_RECEIVED = 'react-uconfy/DevicesPage/FetchDevicesResponse'

export function devicesReceived(devices: any) {
  return {
    type: FETCH_DEVICES_RESPONSE_RECEIVED,
    payload: devices
  }
}
