import {Protocol} from './protocol';

export const POWER_LED_PROTOCOL: Record<number, Protocol> = {
  0: {
    color: '',
    interval: '',
    message: 'Turned Off'
  },
  2: {
    color: 'error',
    interval: '',
    message: 'Error'
  },
  4: {
    color: 'success',
    interval: '',
    message: 'Running'
  },
  6: {
    color: 'warning',
    interval: '',
    message: 'Warning'
  },
  10: {
    color: 'error',
    interval: 'hz-05',
    message: 'TacSupervisor down'
  },
  12: {
    color: 'success',
    interval: 'hz-05',
    message: 'Initializing'
  },
  16: {
    color: 'warning',
    interval: 'hz-05',
    message: 'Low power'
  },
  18: {
    color: 'error',
    interval: 'hz-1',
    message: 'TacSupervisor down'
  },
  20: {
    color: 'success',
    interval: 'hz-1',
    message: 'Initializing'
  },
  22: {
    color: 'warning',
    interval: 'hz-1',
    message: 'Low power'
  },
  26: {
    color: 'error',
    interval: 'hz-1',
    message: 'TacSupervisor down'
  },
  30: {
    color: 'success',
    interval: 'hz-1',
    message: 'Initializing'
  },
  32: {
    color: 'warning',
    interval: 'hz-1',
    message: 'Low power'
  },
  58: {
    color: 'error',
    interval: 'hz-1',
    message: 'TacSupervisor down'
  },
  60: {
    color: 'success',
    interval: 'hz-1',
    message: 'Initializing'
  },
  62: {
    color: 'warning',
    interval: 'hz-1',
    message: 'Low power'
  },
};
