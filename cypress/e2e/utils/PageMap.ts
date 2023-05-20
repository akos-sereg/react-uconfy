const PageMap: any = {
  StatusPage: {
    ServerConfig: 'span[data-automation-id="server-config"]'
  },
  DeviceListPage: {
    AddDeviceButton: 'div[data-automation-id="add-device-button"]',
    RegisteredDeviceItemName: 'b[data-automation-id="registered-device-name"]',
    RegisteredDeviceItemPlatform: 'p[data-automation-id="registered-device-platform"]',
  },
  CreateDevicePage: {
    Name: 'input[data-automation-id="create-device-name"]',
    Platform: 'input[data-automation-id="create-device-platform"]',
    CreateButton: 'button[data-automation-id="create-device-button"]'
  }
}

export default PageMap
