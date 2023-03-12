import { sleepMs } from "./SleepUtils"

export default class BackendlessUconfyApi {
  private minServiceLatencyMs = 1500
  private maxServiceLatencyMs = 3500

  async fakeServiceLatency() {
    await sleepMs(this.maxServiceLatencyMs - this.minServiceLatencyMs)
  }
}
