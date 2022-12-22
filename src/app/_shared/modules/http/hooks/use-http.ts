import React, {useCallback} from 'react';

import {HttpContext} from '../contexts/http-context';
import {FetchOperation, FetchResult} from '../models/fetch-result.interface';
import {HttpMethod} from '../types/http-method';
import {HttpRequestOptions} from '../models/http-request-options';
import {HttpInterceptorApi, HttpRequestInterceptor, HttpResponseInterceptor} from '../models/http-interceptors';
import {HttpResponse} from '../models/http-response';
import {FetchError} from '../classes/fetch-error';

export type FetchOperationOptions = {
  readonly url: string;
  readonly method: HttpMethod;
  readonly headers?: HeadersInit;
  readonly body?: Record<string, any>;
  readonly params?: Record<string, unknown>;
};

const collectInterceptors = <Interceptor>(interceptors: HttpInterceptorApi<Interceptor>): Interceptor[] => {
  const collectedInterceptors: Interceptor[] = [];
  interceptors.forEach((interceptor) => {
    collectedInterceptors.push(interceptor);
  });
  return collectedInterceptors;
}

export const useHttp = <T>(hookOptions: Partial<FetchOperationOptions>): FetchResult<T> => {
  const {client, interceptors} = React.useContext(HttpContext);
  const [data, setData] = React.useState<T>();
  const [error, setError] = React.useState<FetchError>();
  const [isLoaded, setIsLoaded] = React.useState(false);
  const operation: FetchOperation<T> = useCallback(async (operationOptions = {}) => {
    const {url, method, headers, body, params} = {...hookOptions, ...operationOptions};
    const requestInterceptors = collectInterceptors<HttpRequestInterceptor>(interceptors.request);
    const responseInterceptors = collectInterceptors<HttpResponseInterceptor>(interceptors.response);
    if (!url) {
      throw new Error('Url should be provided');
    }
    if (!method) {
      throw new Error('HTTP method should be provided');
    }
    try {
      const request: HttpRequestOptions = await requestInterceptors.reduce(
        (request, i) => request.then(r => i({url, method, options: r})),
        Promise.resolve({headers, body, params} as HttpRequestOptions),
      );
      const response: HttpResponse<T> = await responseInterceptors.reduce(
        (response, i) => response.then(r => i({response: r})),
        client.request<T>(url, method, request),
      );
      const data = response.data;
      setData(data);
      return data;
    } catch (error) {
      setError(new FetchError((error as Response).statusText, (error as Response).status));
    } finally {
      setIsLoaded(false);
    }
  }, [client, hookOptions]) as FetchOperation<T>;
  return {data, isLoaded, error, operation};
};
