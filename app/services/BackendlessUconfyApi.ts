import { sleepMs } from "./SleepUtils"

export default class BackendlessUconfyApi {
  private minServiceLatencyMs = 200
  private maxServiceLatencyMs = 1200

  async fakeServiceLatency() {
    await sleepMs(this.maxServiceLatencyMs - this.minServiceLatencyMs)
  }
}
