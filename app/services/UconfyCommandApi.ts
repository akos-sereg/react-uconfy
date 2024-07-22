import UconfyBackendApi from './UconfyBackendApi'
// import axios from '../react-offline-mode/src/axios-spy'
import axios from 'axios';
import {getRootPage} from "./UrlService";
import config from './Config'
import {WrappedResponse} from "./api/ServerApi";
import { CommandApi, DeviceCommand, SendCommandResponse } from "./api/CommandApi";
import BackendlessUconfyCommandApi from "./BackendlessUconfyCommandApi";

class UconfyCommandApi extends UconfyBackendApi implements CommandApi {

  static instance = config.endpointUrl === 'localStorage' ?
    new BackendlessUconfyCommandApi()
    : new UconfyCommandApi()

  async sendCommand(deviceId: string, command: DeviceCommand): Promise<WrappedResponse<SendCommandResponse>> {
    try {
      const response = await axios.post(`${UconfyBackendApi.endpointUrl}/command/${deviceId}`,
        command,
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
}

export default UconfyCommandApi;

