import UconfyBackendApi from './UconfyBackendApi'
import axios from 'axios'

class UconfyDevicesApi extends UconfyBackendApi {

  static instance = new UconfyDevicesApi()

  async getDevices() {
    try {
      const response = await axios.get(`${UconfyBackendApi.endpointUrl}/device`,
        {
          headers: UconfyBackendApi.getHeaders()
        });

      return {
        success: true,
        responseData: response.data,
        responseStatus: response.status
      };
    } catch (error) {
      return { success: false }
    }
  }

  async createDevice(name: string, platform: string) {
    try {
      const response = await axios.post(`${UconfyBackendApi.endpointUrl}/device`,
        { name, platform },
        {
          headers: UconfyBackendApi.getHeaders(),
          timeout: UconfyBackendApi.requestTimeout
        });

      return {
        success: true,
        responseData: response.data,
        responseStatus: response.status
      };
    } catch (error) {
      return { success: false }
    }
  }

  async deleteDevice(deviceId: string) {
    try {
      const response = await axios.delete(`${UconfyBackendApi.endpointUrl}/device/${deviceId}`,
        {
          headers: UconfyBackendApi.getHeaders(),
          timeout: UconfyBackendApi.requestTimeout
        });

      return {
        success: true,
        responseData: response.data,
        responseStatus: response.status
      };
    } catch (error) {
      return { success: false }
    }
  }

  async getDevice(deviceId: string) {
    try {
      const response = await axios.get(`${UconfyBackendApi.endpointUrl}/device/${deviceId}/config`,
        {
          headers: UconfyBackendApi.getHeaders(),
          timeout: UconfyBackendApi.requestTimeout
        });

      return {
        success: true,
        responseData: response.data,
        responseStatus: response.status
      };
    } catch (error) {
      return { success: false }
    }
  }
}

export default UconfyDevicesApi
