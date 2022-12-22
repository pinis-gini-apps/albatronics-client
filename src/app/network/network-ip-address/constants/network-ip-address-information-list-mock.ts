import {NetworkIpAddressInformation} from '../models/network-ip-address-information';

export const NETWORK_IP_ADDRESS_IN_FORMATION_LIST_MOCK: NetworkIpAddressInformation[] = [
  {
    id: '001',
    interface: 'enp3s0',
    ipAddressAndSubnet: '192.22.9.1/24',
    status: 'UP',
  },
  {
    id: '002',
    interface: 'enp3s0:1',
    ipAddressAndSubnet: '192.168.11.1/pini',
    status: 'UP',
  },
  {
    id: '003',
    interface: 'enp3s0:2',
    ipAddressAndSubnet: '192.110.126.9/16',
    status: 'UP',
  },
  {
    id: '004',
    interface: 'enp3s0:3',
    ipAddressAndSubnet: '10.107.10.155/16',
    status: 'UP',
  },
  {
    id: '005',
    interface: 'enp3s0:4',
    ipAddressAndSubnet: '192.168.140.1/24',
    status: 'UP',
  },
];
