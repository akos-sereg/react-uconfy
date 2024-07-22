import BackendlessUconfyApi from "./BackendlessUconfyApi";
import { CommandApi, DeviceCommand, RegisteredDeviceCommand } from "./api/CommandApi";
import { WrappedResponse } from "./api/ServerApi";

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

  async getRecentCommands(deviceId: string): Promise<WrappedResponse<Array<RegisteredDeviceCommand>>> {
    await this.fakeServiceLatency()
    return {
      success: true,
      responseData: [],
      responseStatus: 200
    }
  }
}

export default BackendlessUconfyCommandApi
