import {NetworkTunnelingInformation} from '../models/network-tunneling-information';

export const NETWORK_TUNNELING_IN_FORMATION_LIST_MOCK: NetworkTunnelingInformation[] = [
  {
    id: '001',
    name: 'Tunnel0',
    locationIpAddress: '192.110.126.14',
    remoteIpAddress: '10.1.157.23',
    type: 'GRE',
    tunnelIpAddress: '192.168.5.1',
    status: 'UP',
  },
];
