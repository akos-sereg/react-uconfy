export const FETCH_DEVICES_RESPONSE_RECEIVED = '[device-list-page] fetch devices response received'
export const FETCH_DEVICES = '[device-list-page] fetch devices requested'

export function fetechDevices() {
  return {
    type: FETCH_DEVICES
  }
}

export function devicesReceived(devices: any) {
  return {
    type: FETCH_DEVICES_RESPONSE_RECEIVED,
    payload: devices
  }
}
