const getCreateDeviceUri = () => {
  return '/#/device/create'
}

const getDeviceUri = (deviceId: string) => {
  return `/#/device/${deviceId}`
}

const getDeviceListUri = () => {
  return '/#/device'
}

export { getCreateDeviceUri, getDeviceUri, getDeviceListUri }
