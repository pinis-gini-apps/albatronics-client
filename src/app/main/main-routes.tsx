import {lazy} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';
import {Network} from '../network/network.component';
import {Enodeb} from '../eNodeB/enodeb.component';
import {Serial} from '../serial/serial.component';
import {Backhaul} from '../backhaul/backhaul.component';
import {Gps} from '../gps/gps.component';
import {Diagnostic} from '../diagnostic/diagnostic.component';
import {Logs} from '../logs/logs.component';
import {Admin} from '../admin/admin.component';

const SystemLazy = lazy(() => import('../system/system.component').then(({System}) => ({default: System})));

export const MainRoutes = () => useRoutes([
  {
    index: true,
    element: <Navigate to="system" replace />,
  },
  {
    path: 'system/*',
    element: <SystemLazy />,
  },
  {
    path: 'network/*',
    element: <Network />,
  },
  {
    path: 'eNodeB/*',
    element: <Enodeb />,
  },
  {
    path: 'serial/*',
    element: <Serial />,
  },
  {
    path: 'backhaul/*',
    element: <Backhaul />,
  },
  {
    path: 'gps/*',
    element: <Gps />,
  },
  {
    path: 'diagnostic/*',
    element: <Diagnostic />,
  },
  {
    path: 'logs/*',
    element: <Logs />,
  },
  {
    path: 'admin/*',
    element: <Admin />,
  },
]);
