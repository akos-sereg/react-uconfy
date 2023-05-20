import {Device, DeviceConfigItem, DevicesApi} from "./api/DevicesApi";
import {USER_ID} from "./BackendlessUconfyLoginApi";
import BackendlessUconfyApi from "./BackendlessUconfyApi";

class BackendlessUconfyDevicesApi extends BackendlessUconfyApi implements DevicesApi {
  async getDevices() {
    const emptyDeviceList: Array<Device> = []
    let devices:  Array<Device> = emptyDeviceList
    if (localStorage.getItem('devices')) {
      devices = JSON.parse(localStorage.getItem('devices'))
    }

    await this.fakeServiceLatency()
    return {
      success: true,
      responseData: {
        devices,
        // @ts-ignore
        deviceIdLastSeen: {}
      },
      responseStatus: 200
    }
  }

  async getLogs(deviceId: string) {
    const logEntries = ['Hello World 1', 'Hello World 2', 'Hello World 3']

    await this.fakeServiceLatency()
    return {
      success: true,
      responseData: logEntries,
      responseStatus: 200
    }
  }

  async updateDevice(deviceId: string, name: string, platform: string) {
    const devicesResponse = await this.getDevices()
    const devices = devicesResponse.responseData.devices
    const device = devices.find((device: Device) => device.deviceID === deviceId)
    if (device) {
      device.name = name
      device.platform = platform
    }

    localStorage.setItem('devices', JSON.stringify(devices))

    await this.fakeServiceLatency()
    return {
      success: true,
      responseData: {},
      responseStatus: 200
    }
  }

  async updateConfig(deviceId: string, items: any) {
    localStorage.removeItem(`device_config_${deviceId}`)

    const deviceConfig = {}
    for (let i = 0; i != items.length; i++) {
      // @ts-ignore
      deviceConfig[items[i].key] = items[i].value
    }

    localStorage.setItem(`device_config_${deviceId}`, JSON.stringify(deviceConfig))

    await this.fakeServiceLatency()
    return {
      success: true,
      responseData: {},
      responseStatus: 200
    }
  }

  async createDevice(name: string, platform: string) {
    const devicesResponse = await this.getDevices()
    const devices = devicesResponse.responseData.devices

    const newDevice = {
      deviceID: `${Math.random() * 10000}`,
      userID: USER_ID,
      name,
      platform
    }
    newDevice.deviceID = newDevice.deviceID.replace('.', '-')
    devices.push(newDevice)

    localStorage.setItem('devices', JSON.stringify(devices))

    await this.fakeServiceLatency()
    return {
      success: true,
      responseData: {},
      responseStatus: 200
    }
  }

  async deleteDevice(deviceId: string) {
    const devicesResponse = await this.getDevices()
    const devices = devicesResponse.responseData.devices
    const newDevices: Array<Device> = []
    for (var i=0; i!=devices.length; i++) {
      if (devices[i].deviceID !== deviceId) {
        newDevices.push(devices[i])
      }
    }

    localStorage.setItem('devices', JSON.stringify(newDevices))

    await this.fakeServiceLatency()
    return {
      success: true,
      responseData: {},
      responseStatus: 200
    }
  }

  async getDevice(deviceId: string) {
    const deviceConfig = localStorage.getItem(`device_config_${deviceId}`)
    let items: Array<DeviceConfigItem> = []
    if (deviceConfig) {
      const config = JSON.parse(deviceConfig)

      for (let i=0; i!=Object.keys(config).length; i++) {
        const key = Object.keys(config)[i]
        const value = config[key]
        items.push({key, value})
      }
    }

    await this.fakeServiceLatency()
    return {
      success: true,
      responseData: {
        items
      },
      responseStatus: 200
    }
  }
}

export default BackendlessUconfyDevicesApi
