import {HttpMethod} from '../types/http-method';

import {HttpRequestOptions} from './http-request-options';
import {HttpResponse} from './http-response';

export interface HttpClient {
  get: <T>(url: string, requestOptions: HttpRequestOptions) => Promise<HttpResponse<T>>;
  post: <T>(url: string, requestOptions: HttpRequestOptions) => Promise<HttpResponse<T>>;
  put: <T>(url: string, requestOptions: HttpRequestOptions) => Promise<HttpResponse<T>>;
  delete: <T>(url: string, requestOptions: HttpRequestOptions) => Promise<HttpResponse<T>>;
  request: <T>(url: string, method: HttpMethod, requestOptions: HttpRequestOptions) => Promise<HttpResponse<T>>;
}
