import {WrappedResponse} from "./ServerApi";

export interface Device {
  deviceID: string
  name: string
  platform: string
  userID: number
}

/**
 * deviceId => lastSeenInMilliseconds association
 */
export interface DeviceLastSeen {
  [key: string]: number
}

export interface DeviceConfigItem {
  key: string
  value: string
}

export interface GetDevicesResponse {
  deviceIdLastSeen: DeviceLastSeen
  devices: Array<Device>
}

export interface GetDeviceResponse {
  items: Array<DeviceConfigItem>
  wifiSsidContext?: string
}

export interface DevicesApi {
  getDevices(): Promise<WrappedResponse<GetDevicesResponse>>
  getLogs(deviceId: string): Promise<WrappedResponse<Array<string>>>
  updateDevice(deviceId: string, name: string, platform: string):  Promise<WrappedResponse<any>>
  updateConfig(deviceId: string, items: any): Promise<WrappedResponse<any>>
  createDevice(name: string, platform: string):  Promise<WrappedResponse<any>>
  deleteDevice(deviceId: string): Promise<WrappedResponse<any>>
  getDevice(deviceId: string): Promise<WrappedResponse<GetDeviceResponse>>
}
