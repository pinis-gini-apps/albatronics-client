import {HttpResponse} from '../models/http-response';

type HttpResponseConstructorOptions<T> = {
  readonly headers: Headers;
  readonly status: number;
  readonly statusText: string;
  readonly type: ResponseType;
  readonly url: string;
  readonly data?: T;
}

export const httpResponseConstructor = <T>(
  {
    headers,
    status,
    statusText,
    type,
    url,
    data,
  }: HttpResponseConstructorOptions<T>,
): HttpResponse<T> => ({
  headers,
  status,
  statusText,
  ok: status >= 200 && status < 300,
  type,
  url,
  data,
});
