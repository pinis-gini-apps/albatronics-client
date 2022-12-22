import {FetchOperationOptions} from '../hooks/use-http';
import {FetchError} from '../classes/fetch-error';

export type FetchOperation<T> = (options?: Partial<FetchOperationOptions>) => Promise<T> | never;

export interface FetchResult<T> {
  data?: T;
  isLoaded: boolean;
  error?: FetchError;
  operation: FetchOperation<T>;
}
