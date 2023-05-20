const PageMap: any = {
  StatusPage: {
    ServerConfig: 'span[data-automation-id="server-config"]'
  },
  LoginPage: {
    LoginButton: 'button[data-automation-id="login-button"]'
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
  },
  UpdateDevicePage: {
    Name: 'input[data-automation-id="device-update-name"]',
    UpdateButton: 'button[data-automation-id="update-device-button"]'
  }
}

export default PageMap
