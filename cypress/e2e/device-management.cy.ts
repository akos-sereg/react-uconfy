import PageMap from "./utils/PageMap";

describe('status page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/#/status')
    cy.get(PageMap.StatusPage.ServerConfig).contains('backendlessDevConfig')
  })

  it('is configured to use backendless', () => {
    cy.visit('http://localhost:3000/#/device')
    cy.get(PageMap.DeviceListPage.AddDeviceButton).click()

    const deviceName = 'My Project'
    const devicePlatform = 'ESP32'
    cy.get(PageMap.CreateDevicePage.Name).type(deviceName)
    cy.get(PageMap.CreateDevicePage.Platform).type('ESP32')
    cy.get(PageMap.CreateDevicePage.CreateButton).click()

    cy.url().should('eq', 'http://localhost:3000/#/device')
    cy.get(PageMap.DeviceListPage.RegisteredDeviceItemName).should('have.length', 1)

    cy.get(PageMap.DeviceListPage.RegisteredDeviceItemName).contains(deviceName)
    cy.get(PageMap.DeviceListPage.RegisteredDeviceItemPlatform).contains(devicePlatform)
  })
})
