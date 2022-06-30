// HTTP Requests
export const LOGIN_REQUEST_SENT = 'react-uconfy/Login/LoginRequest';
export const LOGIN_ERROR = 'react-uconfy/Login/LOGIN_ERROR';
export const ERASE_LOGIN_ERROR_MESSAGE = 'react-uconfy/Login/ERASE_LOGIN_ERROR_MESSAGE'
export const LOGIN_RESPONSE_RECEIVED = 'react-uconfy/Login/LoginResponse';

// App
export const LOGIN_SUCCESS = 'react-uconfy/Login/LoginSuccess';

export function login(username: string, password: string) {
  return {
    type: LOGIN_REQUEST_SENT,
    payload: {
      username,
      password
    }
  };
}

export function loginError(errorMessage: string) {
  return {
    type: LOGIN_ERROR,
    payload: {
      loginErrorMessage: errorMessage
    }
  };
}

export function eraseLoginErrorMessage() {
  return {
    type: ERASE_LOGIN_ERROR_MESSAGE
  }
}

export function loginResponseReceived() {
  return {
    type: LOGIN_RESPONSE_RECEIVED
  }
}

export function loginSuccess(apiKey: string, email: string, role: string, token: string, userID: number) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      apiKey,
      email,
      role,
      token,
      userID
    }
  }
}
