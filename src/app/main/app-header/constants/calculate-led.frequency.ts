import {MaskConfig} from '../models/mask.config';
import {Protocol} from '../../constants/protocol';

export const calculateLedFrequency = (number: number | undefined, maskConfig: MaskConfig[]): Protocol => {
  if (!number) {
    return {
      color: '',
      interval: '',
    };
  }
  const config = maskConfig.find(m => (number & m.mask) > 0);
  return config?.protocol ?? {
    color: '',
    interval: '',
  };
};
