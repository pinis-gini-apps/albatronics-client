import {NetworkRoutingInformation} from '../models/network-routing-information';

export const NETWORK_ROUTING_IN_FORMATION_LIST_MOCK: NetworkRoutingInformation[] = [
  {
    id: '001',
    destinationIpAddress: '12.21.102.0/24',
    gatewayIpAddress: '192.22.9.1/24',
    status: 'UP',
  },
  {
    id: '002',
    destinationIpAddress: '12.21.103.0/24',
    gatewayIpAddress: '192.168.11.1/24',
    status: 'UP',
  },
  {
    id: '003',
    destinationIpAddress: '12.26.8.0/24',
    gatewayIpAddress: '192.110.126.9/16',
    status: 'UP',
  },
  {
    id: '004',
    destinationIpAddress: '193.21.102.0/24',
    gatewayIpAddress: '192.110.121.102',
    status: 'UP',
  },
  {
    id: '005',
    destinationIpAddress: '193.21.103.0/24',
    gatewayIpAddress: '192.110.121.103',
    status: 'UP',
  },
];
