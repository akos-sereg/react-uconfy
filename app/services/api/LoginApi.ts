import {WrappedResponse} from "./ServerApi";

export interface User {
  apiKey: string
  email: string
  role: string
  token: string
  userID: number
}

export interface LoginApi {
  login(username: string, password: string): Promise<WrappedResponse<User>>
  getMe(): Promise<WrappedResponse<User>>
  register(username: string, password: string): Promise<WrappedResponse<User>>
}
