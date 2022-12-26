export interface AuthServiceLoginResponse {
  token: string;
}

export interface AuthService {
  login: (userName: string, password: string) => Promise<AuthServiceLoginResponse>;
  logout: () => Promise<void>;
  refresh: (token: string) => Promise<AuthServiceLoginResponse>;
}
