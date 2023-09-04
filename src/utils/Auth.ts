import axios from 'axios';

import { TOKEN_KEY, LoginApiResponse, SERVER_URL } from './Constants';

const login = async (emailAddress: string, password: string) => {
    try {
        // TODO remove url
        console.log(SERVER_URL)
        const response = await axios.post<LoginApiResponse>(`${SERVER_URL}/login`, {
            emailAddress,
            password,
          });

          console.log('Auth Token:', response.data.token);

          localStorage.setItem(TOKEN_KEY, `Bearer ${response.data.token}`)
          return true;
    } catch (error) {
      // setError('Authentication failed. Please check your credentials.');
      return false
    }
}

const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
}

const isAuthenticated = () => {
  return !!localStorage.getItem(TOKEN_KEY);
}

export { login, logout, isAuthenticated }
