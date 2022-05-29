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

  endpointUrl = 'http://127.0.0.1:8080/api'
  requestTimeout = 5000
}

export default UconfyBackendApi
