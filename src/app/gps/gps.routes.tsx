import {lazy} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';

const GpsPerformances = lazy(() => import('./gps-performances/gps-performances.component').then(({GpsPerformances}) => ({default: GpsPerformances})));

export const GpsRoutes = () => useRoutes([
  {
    index: true,
    element: <Navigate to="performances" replace />
  },
  {
    path: 'performances',
    element: <GpsPerformances />,
  },
]);
