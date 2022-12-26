import React, {useCallback, useMemo, useState} from 'react';

import {AuthService} from '../models/auth-service';
import {AuthContext, AuthContextApi} from '../contexts/auth-context';
import {isJwtExpired} from '../utilites/is-jwt-expired';
import {getJwtExpirationDate} from '../utilites/get-jwt-expiration-date';
import {useIdleTimer} from 'react-idle-timer';

type AuthProviderProps = {
  authService: AuthService;
  cacheStorage: Storage;
  children: React.ReactNode;
};

const CACHE_STORAGE_KEY_NAME = 'authToken';
const UPDATE_TOKEN_WINDOW_IN_MILLISECONDS = 1000 * 60 * 5;
const IDLE_TIMER = 1000 * 60 * 5;

export const AuthProvider: React.FC<AuthProviderProps> = ({authService, cacheStorage, children}) => {
  const [token, setToken] = useState(() => cacheStorage.getItem(CACHE_STORAGE_KEY_NAME));
  const login = useCallback(
    async (userName: string, password: string) => {
     const {token: tokenResponse} = await authService.login(userName, password);
     if (tokenResponse) {
       cacheStorage.setItem(CACHE_STORAGE_KEY_NAME, tokenResponse);
       setToken(tokenResponse);
     }
    },
        [authService, cacheStorage]
  );
  const logout = useCallback(
    async () => {
      await authService.logout();
      cacheStorage.removeItem(CACHE_STORAGE_KEY_NAME);
      cacheStorage.removeItem('conf');
      setToken(null);
    },
        [authService, cacheStorage]
  );
  const getToken = useCallback(
    async (): Promise<string | undefined> => {
      if (!token) {
        return;
      }
      const shouldUpdateToken = getJwtExpirationDate(token)! <  Date.now() + UPDATE_TOKEN_WINDOW_IN_MILLISECONDS;
      if (shouldUpdateToken) {
        const {token: updatedToken} = await authService.refresh(token!);
        if (!updatedToken) {
          return;
        }
        cacheStorage.setItem(CACHE_STORAGE_KEY_NAME, updatedToken);
        setToken(updatedToken);
        return updatedToken;
      }
      return token;
    },
    [authService, cacheStorage, token],
  );
  const contextValue: AuthContextApi = useMemo(
    () => ({
      isLogged:  Boolean(token) && !isJwtExpired(token!),
      login,
      logout,
      getToken,
    }),
    [
      token,
      login,
      logout,
      getToken,
    ],
  );

  const {} = useIdleTimer({
    timeout: IDLE_TIMER,
    onIdle: logout
  });

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
