import React, { useEffect } from 'react';
import {BrowserRouter} from 'react-router-dom';

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
import { UserProvider } from './_shared/contexts/user/user.provider';
import './styles.scss';
import { useUserConfig } from 'store/useUserConfig';

const jwtAuthService = jwtAuthServiceConstructor({});
const httpClient = nativeHttpClient as HttpClient;

export const AppComponent: React.FC = () => {
  const userConfig = useUserConfig(state => state.userConfig);
  const setUserConfig = useUserConfig(state => state.setUserConfig);

  useEffect(() => {
    if (userConfig.length === 0 && localStorage.getItem('conf') && localStorage.getItem('authToken')) {
      setUserConfig(JSON.parse(localStorage.getItem('conf')!));
    }
  }, [])


  return (
    <AuthProvider
      authService={jwtAuthService}
      cacheStorage={localStorage}
    >
      <UserProvider>
      <NotificationProvider Component={SnackbarNotification}>
        <HttpProvider client={httpClient}>
          <AuthRequestInterceptor>
            <BrowserRouter>
              <AuthResponseInterceptor>
                <HttpErrorResponseInterceptor>
                  <React.Suspense>
                    <ThemeProvider theme={appTheme}>
                      <AppRoutes/>
                    </ThemeProvider>
                  </React.Suspense>
                </HttpErrorResponseInterceptor>
              </AuthResponseInterceptor>
            </BrowserRouter>
          </AuthRequestInterceptor>
        </HttpProvider>
      </NotificationProvider>
      </UserProvider>
    </AuthProvider>
  );
};
