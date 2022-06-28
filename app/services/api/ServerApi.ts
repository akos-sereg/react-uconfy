export interface WrappedResponse<T> {
  success: boolean
  responseData?: T
  responseStatus?: number
}
