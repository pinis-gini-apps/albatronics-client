import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

import {ThemeProvider} from '@mui/material/styles';

import {AuthProvider} from './_shared/modules/auth/providers/auth.provider';
import {jwtAuthServiceConstructor} from './_shared/modules/auth/services/jwt-auth-service-constructor';
import {AppRoutes} from './app.routes';
import {HttpProvider} from './_shared/modules/http/providers/http-provider';
import {nativeHttpClient} from './_shared/modules/http/services/native-http-client';
import {HttpClient} from './_shared/modules/http/models/http-client.interface';
import {AuthResponseInterceptor} from './_shared/modules/auth/interceptors/auth-response-interceptor';
import {AuthRequestInterceptor} from './_shared/modules/auth/interceptors/auth-request-interceptor';
import {appTheme} from './app.theme';
import {NotificationProvider} from './_shared/modules/notification/providers/notification-provider';
import {SnackbarNotification} from './_shared/modules/notification/components/snackbar-notification';
import {HttpErrorResponseInterceptor} from './_shared/modules/http/interceptors/http-error-response-interceptor';
import './styles.scss';
import jwt_decode from 'jwt-decode'
import { initializeUserData } from './api/get';
import { MAX_FAIL_TIME_COUNT } from '../constants';
import usePingServer from 'hooks/usePingServer';
import useSystemTimeAndDate from 'hooks/useSystemTimeAndDate';

const jwtAuthService = jwtAuthServiceConstructor({});
const httpClient = nativeHttpClient as HttpClient;

export const AppComponent: React.FC = () => {
  const navigate = useNavigate();
  const failedCount = usePingServer();
  useSystemTimeAndDate();

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      const decode: {user_id: string} = jwt_decode(localStorage.getItem('authToken')!);      
      initializeUserData(decode.user_id);
    } else {
      navigate('/login')
    }
  }, [])

  useEffect(() => {    
    if (failedCount === MAX_FAIL_TIME_COUNT) {
      localStorage.removeItem('authToken');
      navigate('/login')
    }
  }, [failedCount]);

  return (
    <AuthProvider
      authService={jwtAuthService}
      cacheStorage={localStorage}
    >
      <NotificationProvider Component={SnackbarNotification}>
        <HttpProvider client={httpClient}>
          <AuthRequestInterceptor>
              <AuthResponseInterceptor>
                <HttpErrorResponseInterceptor>
                  <React.Suspense>
                    <ThemeProvider theme={appTheme}>
                      <AppRoutes/>
                    </ThemeProvider>
                  </React.Suspense>
                </HttpErrorResponseInterceptor>
              </AuthResponseInterceptor>
          </AuthRequestInterceptor>
        </HttpProvider>
      </NotificationProvider>
    </AuthProvider>
  );
};
