import {lazy, useEffect, useState} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';
import {Network} from '../network/network.component';
import {Enodeb} from '../eNodeB/enodeb.component';
import {Serial} from '../serial/serial.component';
import {Backhaul} from '../backhaul/backhaul.component';
import {Gps} from '../gps/gps.component';
import {Diagnostic} from '../diagnostic/diagnostic.component';
import {Logs} from '../logs/logs.component';
import {Admin} from '../admin/admin.component';
import { useAllowedRoutes } from 'store/useAllowedRoutes';

const SystemLazy = lazy(() => import('../system/system.component').then(({System}) => ({default: System})));

export const MainRoutes = () => {
const allowedRoutes = useAllowedRoutes.getState().allowedRoutes;
const [currentRoutes, setCurrentRoutes] = useState<string[]>([]);

useEffect(() => {
  if (allowedRoutes) {    
    setCurrentRoutes(allowedRoutes)
  }
}, [allowedRoutes])


return useRoutes([
  {
    index: true,
    element: <Navigate to="system" replace />,
  },
  {
    path: 'system/*',
    element: currentRoutes.length > 0 && (currentRoutes.includes('system') ? <SystemLazy /> : <Navigate to='/main/system/status' replace />),
  },
  {
    path: 'network/*',
    element: currentRoutes.length > 0 && (currentRoutes.includes('network') ? <Network /> : <Navigate to='/main/system/status'replace  />),
  },
  {
    path: 'eNodeB/*',
    element: currentRoutes.length > 0 && (currentRoutes.includes('enodeb') ? <Enodeb /> : <Navigate to='/main/system/status'replace  />),
  },
  {
    path: 'serial/*',
    element: currentRoutes.length > 0 && (currentRoutes.includes('serial') ? <Serial /> : <Navigate to='/main/system/status'replace  />),
  },
  {
    path: 'backhaul/*',
    element: currentRoutes.length > 0 && (currentRoutes.includes('backhaul') ? <Backhaul /> : <Navigate to='/main/system/status' replace />),
  },
  {
    path: 'gps/*',
    element: currentRoutes.length > 0 && (currentRoutes.includes('gps') ? <Gps /> : <Navigate to='/main/system/status' replace />),
  },
  {
    path: 'diagnostic/*',
    element: currentRoutes.length > 0 && (currentRoutes.includes('diagnostic') ? <Diagnostic /> : <Navigate to='/main/system/status'replace  />),
  },
  {
    path: 'logs/*',
    element: currentRoutes.length > 0 && (currentRoutes.includes('logs') ? <Logs /> : <Navigate to='/main/system/status' replace />),
  },
  {
    path: 'privileges/*',
    element: currentRoutes.length > 0 && (currentRoutes.includes('privileges') ? <Admin /> : <Navigate to='/main/system/status' replace />),
  },
])};
