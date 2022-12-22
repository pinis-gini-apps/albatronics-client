import React, {ReactElement, useCallback, useContext} from 'react';
import {useNavigate} from 'react-router-dom';

import {NotificationContext} from '../../notification/contexts/notification-context';
import {AuthContext} from '../../auth/contexts/auth-context';

import {HttpContext} from '../contexts/http-context';
import {HttpResponseInterceptor} from '../models/http-interceptors';

type HttpErrorResponseInterceptorProps = {
    children: ReactElement;
};

export const HttpErrorResponseInterceptor: React.FC<HttpErrorResponseInterceptorProps> = ({children}) => {
    const notificationApi = React.useContext(NotificationContext);
    const {interceptors} = useContext(HttpContext);
    const navigate = useNavigate();
    const {logout} = useContext(AuthContext);
    const intercept: HttpResponseInterceptor = useCallback(
        async ({response}) => {

            const errorStatues = [404 /* page not found */, 504 /* we got this error on development server "504 Gateway Timeout"  */];
            if (errorStatues.includes(response.status)) {
                await logout();
                navigate('/login');
            }
            if (response.status !== 404 && response.status >= 400) {
                const message = ((response.data as Record<string, unknown>)?.['message'] ?? 'Something went wrong') as string;
                if (message) {
                    notificationApi.show({type: 'error', message});
                }
            }
            return response;
        },
        [interceptors],
    );
    interceptors.response.add('HTTP_ERROR_RESPONSE_INTERCEPTOR', intercept);
    return (
        children
    );
};
