import React, {ReactElement, useCallback, useContext} from 'react';
import {useNavigate} from 'react-router-dom';

import {HttpContext} from '../../http/contexts/http-context';
import {HttpResponseInterceptor} from '../../http/models/http-interceptors';

import {AuthContext} from '../contexts/auth-context';

type AuthResponseInterceptorProps = {
  children: ReactElement;
};

export const AuthResponseInterceptor: React.FC<AuthResponseInterceptorProps> = ({children}) => {
  const navigate = useNavigate();
  const {logout} = useContext(AuthContext);
  const {interceptors} = useContext(HttpContext);
  const intercept: HttpResponseInterceptor = useCallback(
    async ({response}) => {
      if (!response.url.includes('/login') && response.status === 401) {
        await logout();
        navigate('/login');
      }
      return response;
      },
    [interceptors],
  );
  interceptors.response.add('AUTH_RESPONSE_INTERCEPTOR', intercept);
  return children;
};
