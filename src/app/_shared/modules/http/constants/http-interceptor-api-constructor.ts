import {HttpInterceptorApi} from '../models/http-interceptors';

export const httpInterceptorApiConstructor = <Interceptor>(): HttpInterceptorApi<Interceptor> => {
  const interceptors = new Map<string, Interceptor>();
  return {
    add: (key, interceptor) => {
      interceptors.set(key, interceptor);
    },
    forEach: (fn) => {
      interceptors.forEach(i => {
        if (i) {
          fn(i);
        }
      });
    },
  };
};
