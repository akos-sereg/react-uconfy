import UconfyBackendApi from './UconfyBackendApi'
import config from './Config'
import axios from 'axios'
import BackendlessUconfyLoginApi from "./BackendlessUconfyLoginApi";

export interface UserData {
  apiKey: string
  email: string
  role: string
  token: string
  userID: number
}

class UconfyLoginApi extends UconfyBackendApi {
  static instance = config.endpointUrl === 'localStorage' ? new BackendlessUconfyLoginApi() : new UconfyLoginApi()

  static setUserData(userData: UserData) {
    localStorage.setItem('userData', JSON.stringify(userData))
  }

  static getUserData(): UserData {
    try {
      return JSON.parse(localStorage.getItem('userData'))
    } catch (error) {
      console.log('Could not parse userData from localStorage: ', localStorage.getItem('userData'))
      console.error(error)
      return null
    }
  }

  async login(username: string, password: string) {
    try {
      const response = await axios.post(`${UconfyBackendApi.endpointUrl}/login`,
        { username, password },
        { timeout: UconfyBackendApi.requestTimeout });

      UconfyBackendApi.setJwtToken(response.data.token)
      UconfyLoginApi.setUserData(response.data)

      return {
        success: true,
        responseData: response.data,
        responseStatus: response.status
      }
    } catch (error) {
      return { success: false }
    }
  }

  async getMe() {
    try {
      const response = await axios.post(`${UconfyBackendApi.endpointUrl}/login/jwt`,
        { jwtToken: UconfyBackendApi.getJwtToken() },
        { timeout: UconfyBackendApi.requestTimeout });

      UconfyLoginApi.setUserData(response.data)

      return {
        success: true,
        responseData: response.data,
        responseStatus: response.status
      };
    } catch (error) {
      return { success: false }
    }
  }

  async register(username: string, password: string) {
    try {
      const response = await axios.post(`${UconfyBackendApi.endpointUrl}/login/signup`,
        { email: username, password },
        { timeout: UconfyBackendApi.requestTimeout });

      UconfyBackendApi.setJwtToken(response.data.token)
      UconfyLoginApi.setUserData(response.data)

      return {
        success: true,
        responseData: response.data,
        responseStatus: response.status
      }
    } catch (error) {
      return { success: false }
    }
  }

  async completeSignup(username: string, registrationCode: string) {
    try {
      const response = await axios.post(`${UconfyBackendApi.endpointUrl}/login/verify-email`,
        { email: username, registrationCode: parseInt(registrationCode) },
        { timeout: UconfyBackendApi.requestTimeout });

      UconfyBackendApi.setJwtToken(response.data.token)
      UconfyLoginApi.setUserData(response.data)

      return {
        success: true,
        responseData: response.data,
        responseStatus: response.status
      }
    } catch (error) {
      return { success: false }
    }
  }
}

export default UconfyLoginApi
