import {MaskConfig} from '../models/mask.config';

export const strip2LedConfig: MaskConfig[] = [
  {
    mask: 64,
    protocol: {
      color: 'success',
      interval: 'hz-1',
    },
  },
  {
    mask: 2,
    protocol: {
      color: 'success',
      interval: 'hz-05',
    },
  },
];
