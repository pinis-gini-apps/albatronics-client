import {lazy} from 'react';

import {Navigate, useRoutes} from 'react-router-dom';

import {SystemPower} from './system-power/system-power.component';

const SystemGeneralLazy = lazy(() => import('./system-general/system-general.component').then(({SystemGeneral}) => ({default: SystemGeneral})));
const SystemStatusLazy = lazy(() => import('./system-status/system-status.component').then(({SystemStatus}) => ({default: SystemStatus})));
const SystemAllLazy = lazy(() => import('./system-all/system-all.component').then(({SystemAll}) => ({default: SystemAll})));
const SystemCellularLazy = lazy(() => import('./system-cellular/system-cellular.component').then(({SystemCellular}) => ({default: SystemCellular})));
const SystemPowerLazy = lazy(() => import('./system-power/system-power.component').then(({SystemPower}) => ({default: SystemPower})));
const SystemShutdownRebootLAzy = lazy(() => import('./system-shutdown-reboot/system-shutdown-reboot.component').then(({SystemShutdownReboot}) => ({default: SystemShutdownReboot})));

export const SystemRoutes = () => useRoutes([
  {
    index: true,
    element: <Navigate to="status" replace />,
  },
  {
    path: 'status',
    element: <SystemStatusLazy />,
  },
  {
    path: 'general',
    element: <SystemGeneralLazy />,
  },
  {
    path: 'cellular',
    element: <SystemCellularLazy />,
  },
  {
    path: 'power',
    element: <SystemPowerLazy />,
  },
  {
    path: 'shutdown-reboot',
    element: <SystemShutdownRebootLAzy />,
  },
  {
    path: 'all',
    element: <SystemAllLazy />,
  },
]);
