import UconfyBackendApi from './UconfyBackendApi';
import axios from 'axios';

class UconfyLoginApi extends UconfyBackendApi {

  async login(username: string, password: string) {
    try {
      const response = await axios.post(`${this.endpointUrl}/login`, { username, password });
      return { success: true };
    } catch (error) {
      return { success: false };
    }
  }
}

export default new UconfyLoginApi();
