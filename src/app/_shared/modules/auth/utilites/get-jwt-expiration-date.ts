import {JwtPayload} from 'jsonwebtoken';

import {decodeJwt} from './decode-jwt';

export const getJwtExpirationDate = (token: string): number | undefined => {
  const decodedToken: JwtPayload | undefined = decodeJwt(token);
  if (!decodedToken?.exp) {
    return;
  }
  return decodedToken.exp * 1000;
}
