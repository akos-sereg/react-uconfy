import { WrappedResponse } from "./ServerApi";
import { GetDeviceResponse, GetDevicesResponse } from "./DevicesApi";

export interface SendCommandResponse {

}

export interface DeviceCommand {
  command: string;
  parameter: string;
}

export interface CommandApi {
  sendCommand(deviceId: string, command: DeviceCommand): Promise<WrappedResponse<SendCommandResponse>>
}
