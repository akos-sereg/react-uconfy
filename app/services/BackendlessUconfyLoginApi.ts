import {LoginApi} from "./api/LoginApi";
import UconfyBackendApi from "./UconfyBackendApi";
import BackendlessUconfyApi from "./BackendlessUconfyApi";

export const USER_ID = 1000

class BackendlessUconfyLoginApi extends BackendlessUconfyApi implements LoginApi {

  user = {
    apiKey: 'apikey',
    email: 'dummy-user',
    role: 'normal',
    userID: USER_ID,
    token: 'jwt-token'
  }

  async login(username: string, password: string) {
    UconfyBackendApi.setJwtToken(this.user.token)

    await this.fakeServiceLatency()
    return {
      success: true,
      responseData: this.user,
      responseStatus: 200
    }
  }

  async getMe() {
    await this.fakeServiceLatency()
    return {
      success: true,
      responseData: this.user,
      responseStatus: 200
    }
  }

  async register(username: string, password: string) {
    await this.fakeServiceLatency()
    return {
      success: true
    }
  }

  async completeSignup(username: string, registrationCode: string) {
    await this.fakeServiceLatency()
    return {
      success: true,
      responseData: this.user,
      responseStatus: 200
    }
  }
}

export default BackendlessUconfyLoginApi
