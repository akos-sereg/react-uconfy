import BackendlessUconfyApi from "./BackendlessUconfyApi";
import { CommandApi, DeviceCommand } from "./api/CommandApi";

class BackendlessUconfyCommandApi extends BackendlessUconfyApi implements CommandApi {
  async sendCommand(deviceId: string, command: DeviceCommand) {
    await this.fakeServiceLatency()
    return {
      success: true,
      responseData: {
      },
      responseStatus: 200
    }
  }
}

export default BackendlessUconfyCommandApi
