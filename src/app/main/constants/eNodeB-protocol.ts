import {Protocol} from './protocol';


export const ENODEB_PROTOCOL: Record<number, Protocol> = {
  0: {
    color: 'gray',
    interval: '',
    message: 'Inactive'
  },
  1: {
    color: 'yellowgreen',
    interval: '',
    message: 'Active'
  },
  2: {
    color: 'dodgerblue',
    interval: '',
    message: 'State NMM ongoing'
  },
  3: {
    color: 'red',
    interval: '',
    message: 'State not ready'
  },
  4: {
    color: 'khaki',
    interval: '',
    message: 'State activation ongoing'
  },
  5: {
    color: 'darkorange',
    interval: '',
    message: 'State deactivation ongoing'
  },
};
