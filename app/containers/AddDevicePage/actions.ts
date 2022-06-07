export const CREATE_DEVICE = 'react-uconfy/AddDevicePage/CreateDevice'

export function createDevice(name: string, platform: string) {
  return {
    type: CREATE_DEVICE,
    payload: {
      name,
      platform
    }
  }
}
