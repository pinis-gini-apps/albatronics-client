import React, {useMemo} from 'react';

import {AuthContext} from '../contexts/auth-context';

interface UseAuth {
  login: (userName: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  setUserConfig: any;
  getUserConfig: any;
  readonly isLogged: boolean;
}

export const useAuth = (): UseAuth => {
  const {isLogged, login, logout, setUserConfig, getUserConfig} = React.useContext(AuthContext);
  return useMemo(() => ({
    isLogged,
    getUserConfig,
    setUserConfig,
    login,
    logout,
  }), [isLogged, login, logout]);
};
