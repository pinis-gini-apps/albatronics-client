export interface HttpRequestOptions {
  readonly body?: Record<string, unknown>;
  readonly headers?: HeadersInit;
  readonly params?: Record<string, unknown>;
}
