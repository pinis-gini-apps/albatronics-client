import {JwtPayload} from 'jsonwebtoken';

export const decodeJwt = (token: string): JwtPayload | undefined => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (ignore) {}
};
