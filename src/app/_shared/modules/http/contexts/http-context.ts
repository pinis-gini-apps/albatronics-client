import {createContext} from 'react';

import {HttpClient} from '../models/http-client.interface';
import {HttpInterceptors} from '../models/http-interceptors';

export interface HttpContextInterface {
  readonly client: HttpClient;
  readonly interceptors: HttpInterceptors;
}

export const HttpContext = createContext<HttpContextInterface>({} as HttpContextInterface);
