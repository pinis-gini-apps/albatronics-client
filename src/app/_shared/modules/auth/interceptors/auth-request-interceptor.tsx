import React, {ReactElement, useCallback, useContext} from 'react';

import {HttpContext} from '../../http/contexts/http-context';
import {HttpRequestOptions} from '../../http/models/http-request-options';

import {AuthContext} from '../contexts/auth-context';

type AuthInterceptorProps = {
  children: ReactElement;
};

export const AuthRequestInterceptor: React.FC<AuthInterceptorProps> = ({children}) => {
  const {isLogged, getToken} = useContext(AuthContext);
  const {interceptors} = useContext(HttpContext);
  const intercept = useCallback(
    async ({options}: {options: HttpRequestOptions}) => {
      const token = await getToken();
      const headers = (
        Boolean(token) && isLogged
          ? {...options.headers, Authorization: `Bearer ${token}`}
          : {...options.headers}
      );
      return {...options, headers};
      },
    [interceptors, getToken],
    );
  interceptors.request.add('AUTH_REQUEST_INTERCEPTOR', intercept);
  return children;
};
