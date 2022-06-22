import {Subpage} from "../model/DevicePage";

const getCreateDeviceUri = () => {
  return '/#/device/create'
}

const getDeviceUri = (deviceId: string) => {
  return `/#/device/${deviceId}`
}

const getDeviceSubpageUri = (deviceId: string, subpage: Subpage) => {
  switch (subpage) {
    case Subpage.Parameters:
      return `/#/device/${deviceId}/parameters`
    case Subpage.Console:
      return `/#/device/${deviceId}/console`
    case Subpage.Activity:
      return `/#/device/${deviceId}/activity`
    case Subpage.Access:
    default:
      return `/#/device/${deviceId}`
  }
}

const getDeviceListUri = () => {
  return '/#/device'
}

export { getCreateDeviceUri, getDeviceUri, getDeviceListUri,getDeviceSubpageUri }
