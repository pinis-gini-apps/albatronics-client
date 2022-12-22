import React, {ReactNode, useMemo} from 'react';

import {HttpContext, HttpContextInterface} from '../contexts/http-context';
import {HttpClient} from '../models/http-client.interface';
import {HttpInterceptors, HttpRequestInterceptor, HttpResponseInterceptor} from '../models/http-interceptors';
import {httpInterceptorApiConstructor} from '../constants/http-interceptor-api-constructor';

type HttpProviderProps = {
  readonly client: HttpClient;
  readonly children: ReactNode;
};

const interceptors: HttpInterceptors = {
  request: httpInterceptorApiConstructor<HttpRequestInterceptor>(),
  response: httpInterceptorApiConstructor<HttpResponseInterceptor>(),
};

export const HttpProvider: React.FC<HttpProviderProps> = ({client, children}) => {
  const contextValue: HttpContextInterface = useMemo(
    () => ({
      client,
      interceptors,
    }),
    [client],
    );
  return (
    <HttpContext.Provider value={contextValue}>{children}</HttpContext.Provider>
  );
};
