import {LoginApi} from "./api/LoginApi";
import UconfyBackendApi from "./UconfyBackendApi";

export const USER_ID = 1000

class BackendlessUconfyLoginApi implements LoginApi {

  user = {
    apiKey: 'apikey',
    email: 'dummy-user',
    role: 'normal',
    userID: USER_ID,
    token: 'jwt-token'
  }

  async login(username: string, password: string) {
    UconfyBackendApi.setJwtToken(this.user.token)
    return {
      success: true,
      responseData: this.user,
      responseStatus: 200
    }
  }

  async getMe() {
    return {
      success: true,
      responseData: this.user,
      responseStatus: 200
    }
  }
}

export default BackendlessUconfyLoginApi
