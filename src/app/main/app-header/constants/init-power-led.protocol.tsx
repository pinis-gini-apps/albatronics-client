import {Protocol} from '../../constants/protocol';
import {POWER_LED_PROTOCOL} from '../../constants/power-led-protocol';

export const initPowerLedProtocol = (protocolNumber: number | undefined): Protocol => {
  const protocol: Record<number, Protocol> = POWER_LED_PROTOCOL;
  const defaultValue = protocol[0];
  return protocolNumber ? protocol[protocolNumber] || defaultValue : defaultValue;
};
