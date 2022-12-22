import {Protocol} from './protocol';

export const ACCESS_LED_PROTOCOL: Record<number, Protocol> = {
  0: {
    color: '',
    interval: '',
  },
  1: {
    color: 'success',
    interval: '',
  },
  3: {
    color: 'success',
    interval: 'hz-05',
  },
  5: {
    color: 'success',
    interval: 'hz-1',
  },
  7: {
    color: 'success',
    interval: 'hz-2',
  },
};
