import {HttpMethod} from '../types/http-method';

import {HttpResponse} from './http-response';
import {HttpRequestOptions} from './http-request-options';

export type HttpRequestInterceptor = ({url, method, options}: {url: string, method: HttpMethod, options: HttpRequestOptions}) => Promise<HttpRequestOptions>;
export type HttpResponseInterceptor = <T>({response}: {response: HttpResponse<T>}) => Promise<HttpResponse<T>>;

export interface HttpInterceptorApi<Interceptor> {
  add: (key: string, interceptor: Interceptor) => void;
  forEach: (fn: (interceptor: Interceptor) => void) => void;
}

export interface HttpInterceptors {
  readonly request: HttpInterceptorApi<HttpRequestInterceptor>;
  readonly response: HttpInterceptorApi<HttpResponseInterceptor>;
}
