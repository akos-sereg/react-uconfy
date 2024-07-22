import { WrappedResponse } from "./ServerApi";

export interface SendCommandResponse {

}

export interface DeviceCommand {
  command: string;
  parameter: string;
}

export interface RegisteredDeviceCommand {
  command: string;
  parameter: string;
  id: number;
  deviceId: string;
  createdAt: string;
  processedAt: string;
}

export interface CommandApi {
  sendCommand(deviceId: string, command: DeviceCommand): Promise<WrappedResponse<SendCommandResponse>>
  getRecentCommands(deviceId: string): Promise<WrappedResponse<Array<RegisteredDeviceCommand>>>
}
