import React from 'react';

export interface AuthContextApi {
  readonly isLogged: boolean;
  login: (userName: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  getToken: () => Promise<string | undefined>;
}

export const AuthContext = React.createContext<AuthContextApi>({} as AuthContextApi);
