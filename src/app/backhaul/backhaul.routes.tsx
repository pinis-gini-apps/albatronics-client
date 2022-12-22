import {lazy} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';

const BackhaulPerformances = lazy(() => import('./backhaul-performances/backhaul-performances.component').then(({BackhaulPerformances}) => ({default: BackhaulPerformances})));

export const BackhaulRoutes = () => useRoutes([
  {
    index: true,
    element: <Navigate to="performances" replace />
  },
  {
    path: 'performances',
    element: <BackhaulPerformances />,
  },
]);
