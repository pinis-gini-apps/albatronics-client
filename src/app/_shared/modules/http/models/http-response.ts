export interface HttpResponse<T> {
  readonly headers: Headers;
  readonly ok: boolean;
  readonly status: number;
  readonly statusText: string;
  readonly type: ResponseType;
  readonly url: string;
  readonly data?: T;
}
