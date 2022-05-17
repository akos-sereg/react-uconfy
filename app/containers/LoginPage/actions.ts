// import { Author } from '../../model/Author';

export const LOGIN = 'react-uconfy/Login/Login';

export function login(username: string, password: string) {
  return {
    type: LOGIN,
    payload: {
      username,
      password
    }
  };
}
