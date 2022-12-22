import {lazy} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';

const LogsSummery = lazy(() => import('./logs-summery/logs-summery.component').then(({LogsSummery}) => ({default: LogsSummery})));

export const LogsRoutes = () => useRoutes([
  {
    index: true,
    element: <Navigate to="summery" replace />
  },
  {
    path: 'summery',
    element: <LogsSummery />,
  },
]);
