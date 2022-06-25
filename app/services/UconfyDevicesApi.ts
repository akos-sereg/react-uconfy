import UconfyBackendApi from './UconfyBackendApi'
import axios from 'axios'
import {getRootPage} from "./UrlService";

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
      if (error.response.status === 401) {
        document.location.href = getRootPage()
      }

      return { success: false }
    }
  }

  async getLogs(deviceId: string) {
    try {
      const response = await axios.get(`${UconfyBackendApi.endpointUrl}/device/${deviceId}/logs`,
        {
          headers: UconfyBackendApi.getHeaders()
        });

      return {
        success: true,
        responseData: response.data,
        responseStatus: response.status
      };
    } catch (error) {
      if (error.response.status === 401) {
        document.location.href = getRootPage()
      }

      return { success: false }
    }
  }

  async updateDevice(deviceId: string, name: string, platform: string) {
    try {
      const response = await axios.put(`${UconfyBackendApi.endpointUrl}/device/${deviceId}`,
        { deviceId, name, platform },
        {
          headers: UconfyBackendApi.getHeaders()
        });

      return {
        success: true,
        responseData: response.data,
        responseStatus: response.status
      };
    } catch (error) {
      if (error.response.status === 401) {
        document.location.href = getRootPage()
      }

      return { success: false }
    }
  }

  async updateConfig(deviceId: string, items: any) {
    try {
      const response = await axios.put(`${UconfyBackendApi.endpointUrl}/device/${deviceId}/config?origin=web`,
        { deviceId, items },
        {
          headers: UconfyBackendApi.getHeaders()
        });

      return {
        success: true,
        responseData: response.data,
        responseStatus: response.status
      };
    } catch (error) {
      if (error.response.status === 401) {
        document.location.href = getRootPage()
      }

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
      if (error.response.status === 401) {
        document.location.href = getRootPage()
      }

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
      if (error.response.status === 401) {
        document.location.href = getRootPage()
      }

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
      if (error.response.status === 401) {
        document.location.href = getRootPage()
      }

      return { success: false }
    }
  }
}

export default UconfyDevicesApi
