import {MaskConfig} from '../models/mask.config';

export const strip1LedConfig: MaskConfig[] = [
  {
    mask: 32,
    protocol: {
      color: 'success',
      interval: 'hz-1',
    },
  },
  {
    mask: 1,
    protocol: {
      color: 'success',
      interval: 'hz-05',
    },
  },
];
