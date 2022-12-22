import {Protocol} from '../../constants/protocol';
import {ACCESS_LED_PROTOCOL} from '../../constants/access-led-protocol';

export const initAccessLedProtocol = (protocolNumber: number | undefined): Protocol => {
  const protocol: Record<number, Protocol> = ACCESS_LED_PROTOCOL;
  const defaultValue = protocol[0];
  return protocolNumber ? protocol[protocolNumber] || defaultValue : defaultValue;
};
