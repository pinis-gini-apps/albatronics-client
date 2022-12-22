import {HttpClient} from '../models/http-client.interface';
import {HttpRequestOptions} from '../models/http-request-options';
import {HttpMethod} from '../types/http-method';
import {HttpResponse} from '../models/http-response';
import {httpResponseConstructor} from '../utilites/http-response-constructor';

const mapFetchResponseToHttpResponse = <T>(response: Response, data: T): HttpResponse<T> => httpResponseConstructor({
  url: response.url,
  headers: response.headers,
  type: response.type,
  status: response.status,
  statusText: response.statusText,
  data,
});

const extractDateFromFetchResponse = async <T>(response: Response): Promise<T> => {
  try {
    const text = await response.text();
    return text ? JSON.parse(text) : {} as T;
  } catch (ignore) {
    return {} as T;
  }
}

const composeUrl = (baseUrl: string, searchParamsMap: Record<string, string>): string => {
  if (!Object.keys(searchParamsMap).length) {
    return baseUrl;
  }
  const searchParams = new URLSearchParams(searchParamsMap);
  return `${baseUrl}?${searchParams}`;
}

export const nativeHttpClient: HttpClient = {
  get: async <T>(url: string, {headers = {}, params= {}}) => {
    const response = await fetch(composeUrl(url, params), {headers});
    const data = await extractDateFromFetchResponse(response);
    return mapFetchResponseToHttpResponse<T>(response, data as T);
  },
  post: async <T>(url: string, {body = {}, headers = {}, params = {}}) => {
    const response = await fetch(composeUrl(url, params), {headers: {...headers, 'Content-type': 'application/json'}, body: JSON.stringify(body), method: 'POST'});
    const data = await extractDateFromFetchResponse(response);
    return mapFetchResponseToHttpResponse<T>(response, data as T);
  },
  put: async <T>(url: string, {body = {}, headers = {}, params = {}}) => {
    const response = await fetch(composeUrl(url, params), {headers: {...headers, 'Content-type': 'application/json'}, body: JSON.stringify(body), method: 'PUT'});
    const data = await extractDateFromFetchResponse(response);
    return mapFetchResponseToHttpResponse<T>(response, data as T);
  },
  delete: async <T>(url: string, {headers = {}, params = {}}) => {
    const response = await fetch(composeUrl(url, params), {headers, method: 'DELETE'});
    const data = await extractDateFromFetchResponse(response);
    return mapFetchResponseToHttpResponse<T>(response, data as T);
  },
  request: <T>(url: string, method: HttpMethod, options: HttpRequestOptions) => {
    const httpMethodToClientRequest: Partial<Record<HttpMethod, (url: string, options: HttpRequestOptions) => Promise<HttpResponse<T>>>> = {
      GET: (url, options) => nativeHttpClient.get!<T>(url, options),
      POST: (url, options) => nativeHttpClient.post!<T>(url, options),
      PUT: (url, options) => nativeHttpClient.put!<T>(url, options),
      DELETE: (url, options) => nativeHttpClient.delete!<T>(url, options),
    };
    const httpRequest = httpMethodToClientRequest[method];
    if (!httpRequest) {
      throw new Error(`Http method ${method} is not supported.`)
    }
    return httpRequest(url, options);
  },
};
