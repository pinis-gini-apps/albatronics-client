import {MaskConfig} from '../models/mask.config';

export const strip3LedConfig: MaskConfig[] = [
  {
    mask: 128,
    protocol: {
      color: 'success',
      interval: 'hz-1',
    },
  },
  {
    mask: 3,
    protocol: {
      color: 'success',
      interval: 'hz-05',
    },
  },
];
