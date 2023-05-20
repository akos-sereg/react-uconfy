import PageMap from "./utils/PageMap";

describe('Device Management', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/#/login')
    cy.get(PageMap.LoginPage.LoginButton).click()
    cy.url().should('eq', 'http://localhost:3000/#/device')

    cy.visit('http://localhost:3000/#/status')
    cy.get(PageMap.StatusPage.ServerConfig).contains('backendlessDevConfig')
  })

  it('is able to create device', () => {

    cy.visit('http://localhost:3000/#/device')
    cy.get(PageMap.DeviceListPage.AddDeviceButton).click()

    const deviceName = 'My Project'
    const devicePlatform = 'ESP32'
    cy.get(PageMap.CreateDevicePage.Name).type(deviceName)
    cy.get(PageMap.CreateDevicePage.Platform).type(devicePlatform)
    cy.get(PageMap.CreateDevicePage.CreateButton).click()

    cy.url().should('eq', 'http://localhost:3000/#/device')
    cy.get(PageMap.DeviceListPage.RegisteredDeviceItemName).should('have.length', 1)

    cy.get(PageMap.DeviceListPage.RegisteredDeviceItemName).contains(deviceName)
    cy.get(PageMap.DeviceListPage.RegisteredDeviceItemPlatform).contains(devicePlatform)
  })

  it('is able to update device', () => {
    cy.visit('http://localhost:3000/#/device')
    cy.get(PageMap.DeviceListPage.AddDeviceButton).click()

    const deviceName = 'My Project'
    const devicePlatform = 'ESP32'
    cy.get(PageMap.CreateDevicePage.Name).type(deviceName)
    cy.get(PageMap.CreateDevicePage.Platform).type(devicePlatform)
    cy.get(PageMap.CreateDevicePage.CreateButton).click()

    cy.url().should('eq', 'http://localhost:3000/#/device')
    cy.get(PageMap.DeviceListPage.RegisteredDeviceItemName).should('have.length', 1)

    cy.get(PageMap.DeviceListPage.RegisteredDeviceItemName).click()
    cy.get(PageMap.UpdateDevicePage.Name).type(' Updated')
    cy.get(PageMap.UpdateDevicePage.UpdateButton).click()
    cy.get(PageMap.UpdateDevicePage.UpdateButton, {
      timeout: 5000
    }).should('be.disabled')

    cy.visit('http://localhost:3000/#/device')
    cy.get(PageMap.DeviceListPage.RegisteredDeviceItemName).contains(`${deviceName} Updated`)
  })
})
