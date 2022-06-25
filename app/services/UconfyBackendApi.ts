import config from './Config'

class UconfyBackendApi {

  static setJwtToken(token: string) {
    localStorage.setItem('jwt', token)
  }

  static getJwtToken() {
    const jwt = localStorage.getItem('jwt')
    return jwt === 'null' ? null : jwt
  }

  static getHeaders() {
    return {
      'Authorization': UconfyBackendApi.getJwtToken()
    }
  }

  static endpointUrl = config.endpointUrl
  static requestTimeout = config.requestTimeout
}

export default UconfyBackendApi
