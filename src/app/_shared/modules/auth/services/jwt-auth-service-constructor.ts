import { AuthService } from '../models/auth-service';
import { useUserConfig } from '../../../../../store/useUserConfig';
type AuthServiceConstructor<Options> = (options: Options) => AuthService;
type JwtAuthServiceConstructorOptions = {};

export const jwtAuthServiceConstructor: AuthServiceConstructor<JwtAuthServiceConstructorOptions> = (): AuthService => ({
  login: async (username: string, password: string) => {
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const text = await response.text();
      const res = JSON.parse(text);      
      if (res.role) {
        const response = await fetch(`/api/user/config/${res.role.toLowerCase()}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${res.token}`,
            sensitive: 'true', mode: 'cors',
            'Content-Type': 'application/json'
          },
        });
        const data = await response.text();
        const result = await JSON.parse(data);
        localStorage.setItem('conf', JSON.stringify(result));
        useUserConfig.getState().setUserConfig(result)
      }
      return text ? res : {};
    } catch (error) {
      console.error(error);
    }
  },
  setUserConfig: async (data: any) => {
    try {
      const response = await fetch('/api/user/config', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          sensitive: 'true', mode: 'cors',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
      const text = await response.text();
      const res = JSON.parse(text);
      return text ? res : {};
    } catch (error) {
      console.error(error);
    }
  },
  getUserConfig: async (userRole: string) => {
    try {
      const response = await fetch(`/api/user/config/${userRole}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          sensitive: 'true', mode: 'cors',
          'Content-Type': 'application/json'
        },
      });
      const text = await response.text();
      const res = await JSON.parse(text);
      return text ? res : {};
    } catch (error) {
      console.error(error);
    }
  },
  logout: () => Promise.resolve(),
  refresh: async (token: string) => {
    try {
      const response = await fetch('/auth/update', {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}`, sensitive: 'true' },
      });
      const text = await response.text();
      return text ? JSON.parse(text) : {};
    } catch (error) {
      console.error(error);
    }
  },
});
