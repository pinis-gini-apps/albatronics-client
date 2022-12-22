import {getJwtExpirationDate} from './get-jwt-expiration-date';

export const isJwtExpired = (token: string): boolean => {
  const expirationDate = getJwtExpirationDate(token);
  return (
    expirationDate
      ? expirationDate < Date.now()
      : true
  );
}
