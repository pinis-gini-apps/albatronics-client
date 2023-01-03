import { AuthService } from '../models/auth-service';
import jwt_decode from 'jwt-decode';
import { initializeUserData } from 'app/api/get';
import { useSystemData } from 'store/useSystemData';
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
      if (res.token) {
        const decode: {user_id: string} = await jwt_decode(res.token);
        await initializeUserData(decode.user_id, res.token)
      }
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
      const res = JSON.parse(text);      
      if (res.timestamp) {
        useSystemData.getState().setSystemData('timestamp', res.timestamp);
      }
      return text ? JSON.parse(text) : {};
    } catch (error) {
      console.error(error);
    }
  },
});
