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
}

export default new UconfyDevicesApi()
