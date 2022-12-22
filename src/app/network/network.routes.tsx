import {lazy} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';

const NetworkTunnelingLazy = lazy(() => import('./network-tunneling/network-tunneling.component').then(({NetworkTunneling}) => ({default: NetworkTunneling})));
const NetworkIpAddressLazy = lazy(() => import('./network-ip-address/network-ip-address.component').then(({NetworkIpAddress}) => ({default: NetworkIpAddress})));
const NetworkRoutingLazy = lazy(() => import('./network-routing/network-routing.component').then(({NetworkRouting}) => ({default: NetworkRouting})));
const NetworkPortForwardingLAzy = lazy(() => import('./network-port-forwarding/network-port-forwarding.component').then(({NetworkPortForwarding}) => ({default: NetworkPortForwarding})));

export const NetworkRoutes = () => useRoutes([
  {
    index: true,
    element: <Navigate to="ip-address" replace />,
  },
  {
    path: 'ip-address',
    element: <NetworkIpAddressLazy />,
  },
  {
    path: 'routing',
    element: <NetworkRoutingLazy />,
  },
  {
    path: 'tunneling',
    element: <NetworkTunnelingLazy />,
  },
  {
    path: 'port-forwarding',
    element: <NetworkPortForwardingLAzy />,
  },
]);
