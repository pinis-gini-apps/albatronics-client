import React, {useMemo} from 'react';

import {AuthContext} from '../contexts/auth-context';

interface UseAuth {
  login: (userName: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  readonly isLogged: boolean;
}

export const useAuth = (): UseAuth => {
  const {isLogged, login, logout } = React.useContext(AuthContext);
  return useMemo(() => ({
    isLogged,
    login,
    logout,
  }), [isLogged, login, logout]);
};
