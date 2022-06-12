import UconfyBackendApi from './UconfyBackendApi'
import axios from 'axios'

class UconfyDevicesApi extends UconfyBackendApi {

  async getDevices() {
    try {
      const response = await axios.get(`${this.endpointUrl}/device`,
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
      const response = await axios.post(`${this.endpointUrl}/device`,
        { name, platform },
        {
          headers: UconfyBackendApi.getHeaders(),
          timeout: this.requestTimeout
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
      const response = await axios.delete(`${this.endpointUrl}/device/${deviceId}`,
        {
          headers: UconfyBackendApi.getHeaders(),
          timeout: this.requestTimeout
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
      const response = await axios.get(`${this.endpointUrl}/device/${deviceId}/config`,
        {
          headers: UconfyBackendApi.getHeaders(),
          timeout: this.requestTimeout
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

export default new UconfyDevicesApi()
